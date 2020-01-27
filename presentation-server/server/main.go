package main

import (
	"net"
	"net/http"

	"github.com/improbable-eng/grpc-web/go/grpcweb"
	log "github.com/sirupsen/logrus"
	"google.golang.org/grpc"
	"v2tools.com/presentation/server/presentation"
)

func main() {
	//log.SetReportCaller(true)
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

	presentationServer, err := NewPresentationServer(storage, pubSub)
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
				// req.URL.Path = strings.Replace(req.URL.Path, "/presentations/", "", 1)
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

		presentation.RegisterPresentationServer(grpcServer, presentationServer)
		if err = grpcServer.Serve(listener); err != nil {
			grpcServeError <- err
		}
	}()

	err = <-grpcServeError
	log.WithError(err).Fatal("Error while listening for incoming connections")
}
