

using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Grpc.Core;
using Grpc.Net.Client;
using Microsoft.Extensions.Logging;
using Voting.Models;
using Voting.Record;
using Voting.Summary;
using static Voting.Record.RecordingService;

namespace server.Services
{
    public class PollSummaryService : Voting.Summary.PollSummaryService.PollSummaryServiceBase
    {

        private readonly ILogger _logger;
        private readonly PubSubService _pubSubService;
        private readonly StorageService _storageService;
        private readonly ShutdownService _shutdownService;
        private readonly RecordingServiceClient _recordServiceClient;
        private readonly CancellationTokenSource _cancelTokenSource;
        public PollSummaryService(
            ILogger<PollSummaryService> logger,
            PubSubService pubSubService,
            StorageService redisService,
            ShutdownService shutdownService,
            RecordingServiceClient recordServiceClient
        )
        {
            _logger = logger;
            _pubSubService = pubSubService;
            _storageService = redisService;
            _shutdownService = shutdownService;
            _recordServiceClient = recordServiceClient;
            _cancelTokenSource = new CancellationTokenSource();



            // Streaming from a sequence is currently not implemented
            var streamRecords = new Voting.Record.StreamRecordsRequest();
            var readStream = _recordServiceClient.StreamRecords(streamRecords, new CallOptions(cancellationToken: _cancelTokenSource.Token));
            HandleResponseStream(readStream);
            shutdownService.RegisterShutdownCallback(() => { _cancelTokenSource.Cancel(); });
        }

        public override async Task<GetPollSummaryResponse> GetPollSummary(Poll request, ServerCallContext context)
        {
            ///NOTE: not currently implemented in grpc-net
            //var contextPropagationToken = context.CreatePropagationToken();
            try {
                var summary = await _storageService.GetPollSummary(request.Id);
                return new GetPollSummaryResponse(){
                    Error = summary == null,
                    Value = summary
                };
            } catch (Exception e) {
                _logger.LogError(e, "Error while handling GetPollSummary");
                return new GetPollSummaryResponse() {
                    Error = true
                };
            }
        }

        public override async Task StreamPollSummary(Poll request, IServerStreamWriter<PollSummary> responseStream, ServerCallContext context)
        {

            var close = _pubSubService.SubscribePollSummary(request.Id, (summary) =>
            {
                if (context.CancellationToken.IsCancellationRequested)
                {
                    return;
                }
                try
                {
                    var writeTask = responseStream.WriteAsync(summary);
                    writeTask.Wait();
                }
                catch (Exception e)
                {
                    _logger.LogDebug(e, "Error while sending summary to client");
                }
            });
            while (true) {
                if (context.CancellationToken.IsCancellationRequested) {
                    close();
                    _logger.LogDebug("Gracefully closing subscription");
                    break;
                }
                await Task.Delay(100);
            }
        }

        private async Task<bool> ProcessRecord(VotingRecord record)
        {
            try
            {
                _logger.LogDebug($"Processing voting record {record.Sequence} for user {record?.Vote?.UserId} on poll {record?.Vote?.PollId}");
                
                var vote = record.Vote;
                if (vote == null)
                {
                    _logger.LogDebug($"Not processing record, vote = null");
                    return false;
                }
                
                var pollSummary = await _storageService.GetPollSummary(vote.PollId);
                if (pollSummary == null) {
                    _logger.LogWarning($"Not processing record for poll {vote.PollId}, summary could not be identified");
                    return false;
                }

                pollSummary.TotalVotes++;
                
                var pollOption = pollSummary.Options.FirstOrDefault(x => x.Option?.Id == vote.OptionId);
                if (pollOption == null) {
                    _logger.LogWarning($"Specified poll option {vote.OptionId} not found");
                    return false;
                }

                pollOption.VoteCounts++;

                // ReRank votes and compute ratios
                var rank = 0;
                foreach (var option in pollSummary.Options.OrderBy(x => x.VoteCounts))
                {
                    option.Rank = rank;
                    option.Ratio = option.VoteCounts / pollSummary.TotalVotes;
                    rank++;
                }

                var didUpsert = await _storageService.UpsertPollSummary(pollSummary);
                if (!didUpsert)
                {
                    _logger.LogWarning("Error while upserting PollSummary");
                    return false;
                }

                return true;
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Error while processing voting record");
                return false;
            }
            finally
            {
                _logger.LogDebug($"Finished processing voting record {record.Sequence} for user {record.Vote.UserId} on poll {record.Vote.PollId}");
            }
        }

        private async void HandleResponseStream(AsyncServerStreamingCall<VotingRecord> call)
        {
            try
            {
                var readStream = call.ResponseStream;

                await foreach (var votingRecord in readStream.ReadAllAsync())
                {
                    var didProcess = await ProcessRecord(votingRecord);
                }
            }
            catch (Exception e)
            {
                _logger.LogError(e, "Error while processing vote stream");
            }

            _shutdownService.HandleFailure("Response stream has ended");
        }
    }
}