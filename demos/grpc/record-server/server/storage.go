package main

import (
	"errors"

	"github.com/go-redis/redis/v7"
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

func (store *redisStorage) RecordVote(userID, pollID string) (bool, int64, error) {
	return false, 0, errors.New("Not implemented")
}

func (store *redisStorage) GetPolls() ([]*voting.Poll, error)
