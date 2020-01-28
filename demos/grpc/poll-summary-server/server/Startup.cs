using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Net.Client;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using server.Services;

namespace server
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddGrpc();
            services.AddLogging();
            services.AddSingleton<RedisService>();
            services.AddSingleton<PubSubService>();
            services.AddSingleton<StorageService>();
            services.AddSingleton<ShutdownService>();
            

            var usersHost = System.Environment.GetEnvironmentVariable("USERS_SERVICE_HOST");
            var usersPort = System.Environment.GetEnvironmentVariable("USERS_SERVICE_PORT");
            if (usersHost == null || usersHost == "")
            {
                usersHost = "localhost";
            }
            if (usersPort == null || usersPort == "")
            {
                usersPort = "5000";
            }


            var recordHost = System.Environment.GetEnvironmentVariable("RECORD_SERVICE_HOST");
            var recordPort = System.Environment.GetEnvironmentVariable("RECORD_SERVICE_PORT");
            if (recordHost == null || recordHost == "")
            {
                recordHost = "localhost";
            }
            if (recordPort == null || recordPort == "")
            {
                recordPort = "50000";
            }


            var userChannel = GrpcChannel.ForAddress($"http://{usersHost}:{usersPort}");
            var recordingChannel = GrpcChannel.ForAddress($"http://{recordHost}:{recordPort}");

            var userClient = new Voting.Users.Users.UsersClient(userChannel);
            var recordClient = new Voting.Record.RecordingService.RecordingServiceClient(recordingChannel);

            services.AddSingleton(userClient);
            services.AddSingleton(recordClient);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapGrpcService<PollSummaryService>();

                endpoints.MapGet("/", async context =>
                {
                    await context.Response.WriteAsync("Communication with gRPC endpoints must be made through a gRPC client. To learn how to create a client, visit: https://go.microsoft.com/fwlink/?linkid=2086909");
                });
            });
        }
    }
}
