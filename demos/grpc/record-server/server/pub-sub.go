package main

import (
	"github.com/go-redis/redis/v7"
	"github.com/golang/protobuf/proto"
	log "github.com/sirupsen/logrus"
	"v2tools.com/presentations/demos/grpc/record-server/voting"
)

// PubSub ..
type PubSub interface {
	SubscribeVotes(quit <-chan bool) (<-chan voting.VotingRecord, error)
	PublishVote(message *voting.VotingRecord) error
}

// NewPubSub .. Create a new PubSub engine
func NewPubSub() (PubSub, error) {
	redisClient, err := GetRedisClient()
	if err != nil {
		return nil, err
	}

	pubSubEngine := &redisPubSub{
		client: redisClient,
	}
	return pubSubEngine, nil
}

const (
	recordsTopic = "demo-grpc-vote-topic"
)

type redisPubSub struct {
	client *redis.Client
}

func (ps *redisPubSub) SubscribeVotes(quit <-chan bool) (<-chan voting.VotingRecord, error) {
	sub := ps.client.Subscribe(recordsTopic)
	_, err := sub.Receive()
	if err != nil {
		return nil, err
	}

	redisChan := sub.ChannelSize(3)
	handler := make(chan voting.VotingRecord)
	go func() {
		select {
		case msg := <-redisChan:
			votingRecord := voting.VotingRecord{}
			err = proto.UnmarshalText(msg.Payload, &votingRecord)
			if err != nil {
				log.Warn("Message could not be parsed as VotingRecord")
				break
			}

			handler <- votingRecord
		case <-quit:
			err := sub.Close()
			if err != nil {
				log.Warn("Error while closing redis subscription to voting records")
			}
			close(handler)
		}
	}()

	return handler, nil
}

func (ps *redisPubSub) PublishVote(message *voting.VotingRecord) error {
	value := proto.MarshalTextString(message)
	result, err := ps.client.Publish(recordsTopic, value).Result()
	if err != nil {
		log.Info("Publishing vote message to %d clients", result)
	}
	return err
}
