package main

import (
	"fmt"
	"time"

	"github.com/go-redis/redis/v7"
	"github.com/golang/protobuf/proto"
	log "github.com/sirupsen/logrus"
	"v2tools.com/presentations/demos/grpc/record-server/voting"
)

// Storage ..
type Storage interface {
	RecordVote(userID, pollID string) (bool, int64, error)
	GetPolls() ([]*voting.Poll, error)
}

// NewStorage ..
func NewStorage() (Storage, error) {
	client, err := GetRedisClient()
	if err != nil {
		return nil, err
	}

	store := redisStorage{
		client: client,
	}
	return &store, nil
}

type redisStorage struct {
	client *redis.Client
}

const (
	votingRecordKey = "demo-grpc-voting-record"
	pollsKey        = "demo-grpc-voting-polls"
	pollsIncKey     = "demo-grpc-voting-polls-inc"
)

func (store *redisStorage) RecordVote(userID, pollID string) (bool, int64, error) {
	if userID == "" || pollID == "" {
		return false, 0, nil
	}

	// Ensure the poll exists first
	result, err := store.client.HGet(pollsKey, pollID).Result()
	if err != nil {
		log.WithError(err).Error("Error while getting voting polls")
		return false, 0, err
	}

	if result == "" {
		return false, 0, nil
	}

	key := fmt.Sprintf("%s:%s", userID, pollID)

	pipe := store.client.TxPipeline()

	didSet, err := pipe.SetNX(pollsKey, key, time.Hour*2).Result()
	newID := int64(0)
	if didSet {
		newID, err = pipe.Incr(pollsIncKey).Result()
	}

	_, err = pipe.Exec()

	if err != nil {
		log.WithError(err).Error("Error while recording users vote")
		return false, 0, err
	}

	return didSet, newID, err
}

func (store *redisStorage) GetPolls() ([]*voting.Poll, error) {
	result, err := store.client.HGetAll(pollsKey).Result()
	if err != nil {
		log.WithError(err).Error("Error while getting polls")
		return nil, err
	}

	items := make([]*voting.Poll, len(result))
	i := 0
	for _, value := range result {
		item := &voting.Poll{}
		err := proto.UnmarshalText(value, item)
		if err != nil {
			log.WithError(err).Error("Error parsing db value as a poll")
			continue
		}

		items[i] = item
		i++
	}

	return items, nil
}
