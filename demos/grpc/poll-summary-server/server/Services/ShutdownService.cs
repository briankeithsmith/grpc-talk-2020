using System;
using System.Collections.Generic;
using Microsoft.Extensions.Logging;

namespace server.Services
{
    public class ShutdownService
    {
        private readonly ILogger _logger;
        private readonly List<Action> _shutdownCallbacks = new List<Action>();

        public ShutdownService(ILogger<ShutdownService> logger)
        {
            _logger = logger;
        }

        public void HandleFailure(string message)
        {
            _logger.Log(LogLevel.Error, message);

            lock (_shutdownCallbacks)
            {
                foreach (var callback in _shutdownCallbacks)
                {
                    callback();
                }
            }

            System.Environment.Exit(1);
        }

        public void Shutdown()
        {
            lock (_shutdownCallbacks)
            {
                foreach (var callback in _shutdownCallbacks)
                {
                    callback();
                }
            }

            System.Environment.Exit(0);
        }

        public void RegisterShutdownCallback(Action callback)
        {
            lock (_shutdownCallbacks)
            {
                _shutdownCallbacks.Add(callback);
            }
        }
    }
}