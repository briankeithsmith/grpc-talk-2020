using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Google.Protobuf.WellKnownTypes;
using Grpc.Core;
using Microsoft.Extensions.Logging;
using StackExchange.Redis;
using Voting.Models;
using Voting.Summary;
using static Voting.Record.RecordingService;

namespace server.Services
{
    public class StorageService
    {
        private const string PollSummaryHashKey = "poll-summary";


        private readonly ILogger _logger;
        private readonly IDatabaseAsync _database;
        private readonly PubSubService _pubSub;
        private readonly RecordingServiceClient _recordClient;

        public StorageService(
            ILogger<StorageService> logger,
            RedisService redisService,
            PubSubService pubSubService,
            RecordingServiceClient recordClient
        )
        {
            _logger = logger;
            _pubSub = pubSubService;
            _recordClient = recordClient;

            var redisClient = redisService.Client;
            _database = redisClient.GetDatabase(0);
        }

        public async Task<bool> UpsertPollSummary(PollSummary summary)
        {
            try
            {
                var memoryStream = new MemoryStream();
                var outputStream = new Google.Protobuf.CodedOutputStream(memoryStream);
                summary.WriteTo(outputStream);

                var summaryData = memoryStream.ToArray();

                var pollId = summary.Poll?.Id;
                if (pollId == null || pollId == "")
                {
                    return false;
                }

                var response = await _database.HashSetAsync(PollSummaryHashKey, pollId, summaryData, When.Always);

                var didPublish = await _pubSub.PublishUpdate(summary);

                return didPublish;
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Error while poll summary to database");
                return false;
            }

        }

        public async Task<PollSummary> GetPollSummary(string pollId, ContextPropagationToken token = null)
        {
            try
            {
                if (pollId == null || pollId == "")
                {
                    return null;
                }

                var response = await _database.HashGetAsync(PollSummaryHashKey, pollId);
                if (default(RedisValue) == response) 
                {
                    CallOptions opts;
                    if (token != null) {
                        opts = new CallOptions(propagationToken: token);
                    } else {
                        opts = new CallOptions(deadline: DateTime.UtcNow.AddSeconds(1), cancellationToken: (new CancellationTokenSource(2000)).Token);
                    }
                    var pollsResponse = await _recordClient.GetPollsAsync(new Empty(), opts);
                    if (pollsResponse.Error) {
                        _logger.LogWarning("Error response from record service while fetching polls for not found poll");
                        return null;
                    }

                    var poll = pollsResponse.Polls.FirstOrDefault(x => x.Id == pollId);
                    if (poll == null) {
                        return null;
                    }
                    return DefaultPollSummary(poll);
                }
                return PollSummary.Parser.ParseFrom(response);
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Error while getting summary");
                return null;
            }
        }
    
        public PollSummary DefaultPollSummary(Poll poll)
        {
            var summary = new PollSummary();
            summary.TotalVotes = 0;
            summary.Poll = poll;

            for (var i =0; i < poll.Options.Count; i++) {
                var optionSummary = new PollOptionSummary{
                    Option = poll.Options[i],
                    Rank = i,
                    Ratio = 0,
                    VoteCounts = 0,
                };
                summary.Options.Add(optionSummary);
            }

            return summary;
        }
    }
}