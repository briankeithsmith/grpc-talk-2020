package main

import (
	"fmt"
	"net"
	"net/http"
	"os"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"v2tools.com/presentations/demos/grpc/record-server/voting"
)

func main() {
	listener, err := net.Listen("tcp", ":50000")
	if err != nil {
		log.Panicf("Error while starting listener on port 50000 %f", err)
	}

	pubSub, err := NewPubSub()
	if err != nil {
		log.Panicf("Error while initializing pub sub engine %f", err)
	}
	storage, err := NewStorage()
	if err != nil {
		log.Panicf("Error while initializing storage engine %f", err)
	}

	usersServiceHost := os.Getenv("USERS_SERVICE_HOST")
	usersServicePort := os.Getenv("USERS_SERVICE_PORT")
	if usersServiceHost == "" {
		usersServiceHost = "localhost"
	}
	if usersServicePort == "" {
		usersServicePort = "5000"
	}
	clientConnection, err := grpc.Dial(fmt.Sprintf("%s:%s", usersServiceHost, usersServicePort), grpc.WithInsecure())
	if err != nil {
		log.WithError(err).Panicf("Error while dialing the users service")
	}

	usersClient := voting.NewUsersClient(clientConnection)

	recordServer, err := NewServer(storage, pubSub, usersClient)
	if err != nil {
		log.Panicf("Error while initializing presentation server %f", err)
	}

	serverOpts := grpc.EmptyServerOption{}
	grpcServer := grpc.NewServer(serverOpts)

	grpcServeError := make(chan error)
	go func() {
		options := []grpcweb.Option{
			grpcweb.WithCorsForRegisteredEndpointsOnly(false),
			grpcweb.WithOriginFunc(func(origin string) bool { return true }),
		}

		wrappedGrpc := grpcweb.WrapServer(grpcServer, options...)
		httpServer := http.Server{
			Handler: http.HandlerFunc(func(resp http.ResponseWriter, req *http.Request) {
				wrappedGrpc.ServeHTTP(resp, req)
			}),
		}
		listener, err := net.Listen("tcp", ":50002")
		if err != nil {
			log.Fatalf("failed listening on %v  %v", ":50002", err)
		}
		if err = httpServer.Serve(listener); err != nil {
			grpcServeError <- err
		}
	}()

	go func() {

		voting.RegisterRecordingServiceServer(grpcServer, recordServer)
		if err = grpcServer.Serve(listener); err != nil {
			grpcServeError <- err
		}
	}()

	err = <-grpcServeError
	log.WithError(err).Fatal("Error while listening for incoming connections")
}
