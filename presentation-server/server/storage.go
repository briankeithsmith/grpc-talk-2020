package main

import (
	"github.com/golang/protobuf/proto"
	log "github.com/sirupsen/logrus"
	"time"
	"v2tools.com/presentation/server/presentation"

	"github.com/go-redis/redis/v7"
)

// Storage .. Data persistance layer
type Storage interface {
	GetPresentation() (*presentation.PresentationUpdate, error)
	UpsertPresentation(value *presentation.PresentationUpdate) error
	GetChatMessages(take int) ([]presentation.ChatMessage, error)
	AddChatMessage(message *presentation.ChatMessage) error
}

// NewStorage ..
func NewStorage() (Storage, error) {
	client, err := GetRedisClient()
	if err != nil {
		return nil, err
	}

	result, err := client.SetNX(chatKey, []byte{}, 0).Result()
	if err != nil {
		client.Close()
		return nil, err
	}
	if result {
		log.Infoln("Storage engine created chat list")
	}

	defaultPresentation := proto.MarshalTextString(&presentation.PresentationUpdate{
		SlideName: "",
		SubSlide:  0,
		IsActive:  false,
	})
	result, err = client.SetNX(presentationKey, defaultPresentation, 0).Result()
	if err != nil {
		client.Close()
		return nil, err
	}
	if result {
		log.Infoln("Storage engine created Presentation key")
	}

	engine := redisStorage{
		client: client,
	}

	return &engine, nil
}

const (
	presentationKey = "pres"
	chatKey         = "chat"
	// MaxChatHistory .. Maximum number of items supported by chat
	MaxChatHistory = 1000
)

type redisStorage struct {
	client *redis.Client
}

func (store *redisStorage) GetPresentation() (*presentation.PresentationUpdate, error) {
	result, err := store.client.Get(presentationKey).Result()
	if err != nil {
		return nil, err
	}

	update := presentation.PresentationUpdate{}
	err = proto.UnmarshalText(result, &update)
	if err != nil {
		log.Error("Value for presentation could be recognized as a PresentationUpdate")
		return nil, err
	}
	return &update, nil
}

func (store *redisStorage) UpsertPresentation(value *presentation.PresentationUpdate) error {
	storeValue := proto.MarshalTextString(value)

	_, err := store.client.Set(presentationKey, storeValue, time.Hour*5).Result()
	if err != nil {
		log.WithError(err).Error("Error while updating presentation")
		return err
	}

	return nil
}

func (store *redisStorage) GetChatMessages(take int) ([]presentation.ChatMessage, error) {
	result, err := store.client.LRange(chatKey, -1, int64(take)).Result()
	if err != nil {
		return nil, err
	}

	chatMessages := make([]presentation.ChatMessage, len(result))
	for i := 0; i < len(result); i++ {
		chatMessage := presentation.ChatMessage{}
		err := proto.UnmarshalText(result[i], &chatMessage)
		if err != nil {
			log.Warnf("Item %s could not be processed as a chat message\n", i)
			continue
		}
		chatMessages[i] = chatMessage
	}

	return chatMessages, nil
}

func (store *redisStorage) AddChatMessage(message *presentation.ChatMessage) error {
	value := proto.MarshalTextString(message)

	length, err := store.client.LPush(chatKey, value).Result()
	if length > MaxChatHistory {
		store.client.LTrim(chatKey, -1, MaxChatHistory)
	}

	return err
}
