using Microsoft.Extensions.Logging;
using StackExchange.Redis;

namespace server.Services
{
    public class RedisService 
    {
        public ConnectionMultiplexer Client { get; }
        private readonly ILogger _logger;
        public RedisService(
            ILogger<RedisService> logger,
            ShutdownService shutdown
        )
        {
            _logger = logger;

            var redisHost = System.Environment.GetEnvironmentVariable("REDIS_HOST");
            var redisPort = System.Environment.GetEnvironmentVariable("REDIS_PORT");
            if (redisHost == null || redisHost == "")
            {
                redisHost = "localhost";
            }
            if (redisPort == null || redisPort == "")
            {
                redisPort = "6379";
            }

            Client = ConnectionMultiplexer.Connect($"{redisHost}:{redisPort}");
            Client.ConnectionFailed += (object sender, ConnectionFailedEventArgs args) =>
            {
                shutdown.HandleFailure($"Redis connection failure : {args.FailureType}");
            };
        }
    }
}