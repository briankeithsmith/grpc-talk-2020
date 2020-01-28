using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using StackExchange.Redis;
using Voting.Summary;

namespace server.Services
{
    public class PubSubService
    {
        private const string PollSummaryChannelKey = "poll-summary-channel";

        private readonly ILogger _logger;
        private readonly ISubscriber _subscriber;
        private readonly RedisService _redisService;
        public PubSubService(
            ILogger<PubSubService> logger,
            RedisService redisService
        )
        {
            _logger = logger;
            _redisService = redisService;
            _subscriber = redisService.Client.GetSubscriber();
        }

        public async Task<bool> PublishUpdate(PollSummary summary)
        {
            var pollId = summary.Poll?.Id;
            if (pollId == null || pollId == "")
            {
                return false;
            }


            var memoryStream = new MemoryStream();
            var outputStream = new Google.Protobuf.CodedOutputStream(memoryStream);
            summary.WriteTo(outputStream);

            var summaryData = memoryStream.ToArray();

            var receivers = await _subscriber.PublishAsync(GetRedisChannel(pollId), summaryData);
            _logger.LogDebug($"Publishing update to {receivers} receivers");
            return true;
        }

        public Action SubscribePollSummary(
            string pollId,
            Action<PollSummary> next)
        {
            var subscriber = _redisService.Client.GetSubscriber();
            var channel = GetRedisChannel(pollId);
            subscriber.Subscribe(channel, (channel, value) => {
                try
                {
                    var pollSummary = Voting.Summary.PollSummary.Parser.ParseFrom(value);
                    next(pollSummary);
                }
                catch (Exception e)
                {
                    _logger.LogError(e, "Error while handling poll summary subscription");
                }
            });

            return () =>
            {
                subscriber.Unsubscribe(channel);
            };
        }

        private string GetRedisChannel(string pollId)
        {
            return $"{PollSummaryChannelKey}:{pollId}";
        }
    }
}