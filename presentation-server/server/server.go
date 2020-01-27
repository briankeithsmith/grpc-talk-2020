package main

import (
	"context"
	"os"
	"time"

	"github.com/golang/protobuf/ptypes/empty"
	"github.com/google/uuid"
	log "github.com/sirupsen/logrus"
	"v2tools.com/presentation/server/presentation"
)

// PresentationServer ..
type PresentationServer struct {
	store  Storage
	pubSub PubSub
}

// NewPresentationServer ..
func NewPresentationServer(
	store Storage,
	pubSub PubSub,
) (*PresentationServer, error) {
	server := PresentationServer{
		store:  store,
		pubSub: pubSub,
	}
	return &server, nil
}

// GetPresentation ..
func (server *PresentationServer) GetPresentation(ctx context.Context, req *empty.Empty) (*presentation.ActivePresentationResponse, error) {
	presentationUpdate, err := server.store.GetPresentation()
	if err != nil {
		log.Warn("Error while checking if presentation is active from store %f", err)
	}

	return &presentation.ActivePresentationResponse{
		Current: presentationUpdate,
		Error:   err != nil,
	}, nil
}

// UpsertPresentation ..
func (server *PresentationServer) UpsertPresentation(ctx context.Context, req *presentation.UpdatePresentationRequest) (*presentation.UpdatePresentationResponse, error) {
	if req.Password != os.Getenv("PRESENTATION_PASSWORD") {
		return &presentation.UpdatePresentationResponse{Error: true}, nil
	} else if !req.IsActive &&
		(req.SubSlide != 0 || req.SlideName != "") {
		return &presentation.UpdatePresentationResponse{Error: true}, nil
	} else if req.IsActive && (req.SlideName == "" || req.SubSlide < 0) {
		return &presentation.UpdatePresentationResponse{Error: true}, nil
	}

	presentationUpdate := presentation.PresentationUpdate{
		IsActive:  req.IsActive,
		SubSlide:  req.SubSlide,
		SlideName: req.SlideName,
	}

	err := server.store.UpsertPresentation(&presentationUpdate)
	if err != nil {
		return &presentation.UpdatePresentationResponse{Error: true}, nil
	}
	err = server.pubSub.PublishPresentation(&presentationUpdate)
	if err != nil {
		return &presentation.UpdatePresentationResponse{Error: true}, nil
	}

	return &presentation.UpdatePresentationResponse{Error: false}, nil
}

// JoinPresentation ..
func (server *PresentationServer) JoinPresentation(req *empty.Empty, srv presentation.Presentation_JoinPresentationServer) error {

	currentPresentation, err := server.store.GetPresentation()
	if err != nil {
		log.Warn("Error while checking if presentation is active from store %f", err)
	}
	srv.Send(&presentation.PresentationUpdate{
		SlideName: currentPresentation.SlideName,
		SubSlide:  currentPresentation.SubSlide,
		IsActive:  currentPresentation.IsActive,
	})

	if currentPresentation == nil || !currentPresentation.IsActive {
		return nil
	}

	delay := func(out chan<- interface{}) {
		go func() {
			time.Sleep(time.Second * 10)
			out <- nil
		}()
	}
	ping := make(chan interface{})
	done := make(chan interface{})
	defer close(done)
	out, err := server.pubSub.SubscribePresentation(done)
	delay(ping)
	for {
		select {
		case <-srv.Context().Done():
			return nil
		case <-ping:
			err := srv.Send(&presentation.PresentationUpdate{
				IsPing: true,
			})

			if err != nil {
				log.WithError(err).Warn("Error while sending message to client")
				return nil
			}

			delay(ping)
		case presentationUpdate, more := <-out:
			if !more {
				return nil
			}

			err := srv.Send(&presentationUpdate)
			if err != nil {
				log.WithError(err).Warn("Error while sending message to client")
				return nil
			}
		}
	}
}

// GetChatMessages ..
func (server *PresentationServer) GetChatMessages(req *empty.Empty, srv presentation.Presentation_GetChatMessagesServer) error {
	currentPresentation, err := server.store.GetPresentation()
	if err != nil {
		log.Warn("Error while checking if presentation is active from store %f", err)
	}

	if currentPresentation == nil || !currentPresentation.IsActive {
		return nil
	}

	// quit := make(chan bool, 2)
	// defer func() { quit <- true }()
	// handleMessage, err := server.pubSub.SubscribeChat(quit)

	// messages, err := server.store.GetChatMessages(100)
	// if err != nil {
	// 	log.Warnf("Error while getting chat history %f", err)
	// 	err := srv.Send(&presentation.ChatMessageResponse{Error: true, ErrorMessage: "Error getting message history"})
	// 	if err != nil {
	// 		return nil
	// 	}
	// }
	// for _, message := range messages {
	// 	if srv.Context().Err() != nil {
	// 		break
	// 	}

	// 	err = srv.Send(&presentation.ChatMessageResponse{
	// 		Message: &message,
	// 	})
	// }

	// for {
	// 	select {
	// 	case chatMessage := <-handleMessage:

	// 		if srv.Context().Err() != nil {
	// 			break
	// 		}

	// 		err := srv.Send(&presentation.ChatMessageResponse{
	// 			Message: &chatMessage,
	// 		})
	// 		if err != nil {
	// 			log.Info("Error while sending chat message to client")
	// 		}
	// 		break

	// 	case <-srv.Context().Done():
	// 		quit <- true
	// 		log.Info("Client gracefully disconnecting from presentation")
	// 	}

	// 	if srv.Context().Err() != nil {
	// 		break
	// 	}
	// }

	return nil
}

// PostChatMessage ..
func (server *PresentationServer) PostChatMessage(ctx context.Context, req *presentation.ChatMessage) (*presentation.PostChatMessageResponse, error) {
	currentPresentation, err := server.store.GetPresentation()
	if err != nil {
		log.Warn("Error while checking if presentation is active from store %f", err)
	}

	if err != nil || currentPresentation == nil || !currentPresentation.IsActive {
		return &presentation.PostChatMessageResponse{
			Error: true,
		}, nil
	}

	message := req.GetMessage()
	user := req.GetUser()

	isValid := true
	if message == "" || user == "" {
		isValid = false
	}

	if isValid && len(message) > 5000 || len(user) > 50 {
		isValid = true
	}

	if !isValid {
		return &presentation.PostChatMessageResponse{
			Error:        true,
			ErrorMessage: "Message validation error",
		}, nil
	}

	profanityCheck := make(chan bool, 2)

	go func() {
		userContainsProfanity, err := CheckForProfanity(user)
		if err != nil || userContainsProfanity {
			profanityCheck <- true
		} else {
			profanityCheck <- false
		}
	}()
	go func() {
		messageContainsProfanity, err := CheckForProfanity(message)
		if err != nil || messageContainsProfanity {
			profanityCheck <- true
		} else {
			profanityCheck <- false
		}
	}()
	for i := 0; i < 2; i++ {
		containsProfanity := <-profanityCheck
		if containsProfanity {
			return &presentation.PostChatMessageResponse{
				Error:        true,
				ErrorMessage: "Username or message contains profanity",
			}, nil
		}
	}

	req.MessageId = uuid.New().String()
	req.Timestamp = time.Now().UTC().Unix()
	err = server.store.AddChatMessage(req)
	if err != nil {
		log.Warnf("Error while posting chat message %f", err)
		return &presentation.PostChatMessageResponse{
			Error: true,
		}, nil
	}

	return &presentation.PostChatMessageResponse{
		MessageId: req.MessageId,
	}, nil
}
