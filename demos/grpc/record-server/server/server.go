package main

import (
	"context"

	"github.com/golang/protobuf/ptypes/empty"
	"github.com/google/uuid"
	log "github.com/sirupsen/logrus"
	"v2tools.com/presentations/demos/grpc/record-server/voting"
)

const invalidUserMessage = "Invlaid user"
const internalErrorMesage = "Internal error"
const voteAlreadyRecordedMessage = "Vote already recorded"

// RecordServer ..
type RecordServer struct {
	store  Storage
	pubSub PubSub
	users  voting.UsersClient
}

//NewServer ..
func NewServer(store Storage, pubSub PubSub, users voting.UsersClient) (*RecordServer, error) {
	return &RecordServer{
		store:  store,
		pubSub: pubSub,
		users:  users,
	}, nil
}

//GetPolls ..
func (server *RecordServer) GetPolls(ctx context.Context, req *empty.Empty) (*voting.GetPollsResponse, error) {
	polls, err := server.store.GetPolls()
	if err != nil {
		return &voting.GetPollsResponse{
			Error: true,
		}, nil
	}

	return &voting.GetPollsResponse{
		Error: false,
		Polls: polls,
	}, nil
}

// RecordVote ..
func (server *RecordServer) RecordVote(ctx context.Context, req *voting.Vote) (*voting.RecordVoteResponse, error) {
	user := voting.User{
		Name: req.UserId,
		Code: req.UserCode,
	}

	if user.Name == "" || user.Code == "" {
		return &voting.RecordVoteResponse{
			Error:        true,
			ErrorMessage: invalidUserMessage,
		}, nil
	}

	userResponse, err := server.users.ValidateUser(ctx, &user)
	if err != nil {
		log.WithError(err).Warn("Error while validating user with user service")
		return &voting.RecordVoteResponse{
			Error:        true,
			ErrorMessage: internalErrorMesage,
		}, nil
	}

	if userResponse.Error {
		return &voting.RecordVoteResponse{
			Error:        true,
			ErrorMessage: invalidUserMessage,
		}, nil
	}

	ok, seq, err := server.store.RecordVote(req.UserId, req.PollId)
	if err != nil || !ok {
		if err != nil {
			log.WithError(err).Warn("Error recording vote")
			return &voting.RecordVoteResponse{
				Error:        true,
				ErrorMessage: internalErrorMesage,
			}, nil
		}
		return &voting.RecordVoteResponse{
			Error:        true,
			ErrorMessage: voteAlreadyRecordedMessage,
		}, nil
	}

	votingRecord := voting.VotingRecord{
		Id:       uuid.Microsoft.String(),
		Sequence: seq,
		Vote: &voting.Vote{
			UserId:   req.UserId,
			PollId:   req.PollId,
			OptionId: req.OptionId,
			UserCode: "-",
		},
	}

	err = server.pubSub.PublishVote(&votingRecord)
	if err != nil {
		log.WithError(err).Error("Error while publishing voting record")
	}

	return &voting.RecordVoteResponse{
		Error: false,
	}, nil
}

// StreamRecords ..
func (server *RecordServer) StreamRecords(req *voting.StreamRecordsRequest, srv voting.RecordingService_StreamRecordsServer) error {
	quit := make(chan bool, 2)
	defer func() { quit <- true }()
	handleMessage, err := server.pubSub.SubscribeVotes(quit)
	if err != nil {

	}
	for {
		select {
		case votingRecord := <-handleMessage:
			if srv.Context().Err() != nil {
				break
			}
			err := srv.Send(&votingRecord)
			if err != nil {
				log.WithError(err).Info("Error while sending voting record to client")
			}
			break
		case <-srv.Context().Done():
			quit <- true
			log.WithError(err).Info("Client gracefully disconnecting from presentation")
		}

		if srv.Context().Err() != nil {
			break
		}
	}

	return nil
}
