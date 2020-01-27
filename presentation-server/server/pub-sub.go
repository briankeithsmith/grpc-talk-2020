package main

import (
	"github.com/go-redis/redis/v7"
	"github.com/golang/protobuf/proto"
	log "github.com/sirupsen/logrus"
	"v2tools.com/presentation/server/presentation"
)

// PubSub ..
type PubSub interface {
	SubscribePresentation(quit <-chan interface{}) (<-chan presentation.PresentationUpdate, error)
	PublishPresentation(message *presentation.PresentationUpdate) error
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
	presentationTopic = "pres"
)

type redisPubSub struct {
	client *redis.Client
}

func (ps *redisPubSub) SubscribePresentation(quit <-chan interface{}) (<-chan presentation.PresentationUpdate, error) {
	sub := ps.client.Subscribe(presentationTopic)
	_, err := sub.Receive()
	if err != nil {
		return nil, err
	}

	redisChan := sub.ChannelSize(1)
	handler := make(chan presentation.PresentationUpdate)
	go func() {
		defer close(handler)
		for {
			select {
			case msg := <-redisChan:
				presentationUpdate := presentation.PresentationUpdate{}
				err = proto.UnmarshalText(msg.Payload, &presentationUpdate)
				if err != nil {
					log.Warn("Message could not be parsed as presentation update message")
					break
				}

				log.Debug("publishing presentation update to client")
				handler <- presentationUpdate
				log.Debug("Published presentation update to client")
			case <-quit:
				log.Info("Gracefully closing client presentation subscription to redis")
				err := sub.Close()
				if err != nil {
					log.Warn("Error while closing redis subscription to presentation")
				}
				return
			}
		}
	}()

	return handler, nil
}

func (ps *redisPubSub) PublishPresentation(message *presentation.PresentationUpdate) error {
	value := proto.MarshalTextString(message)
	result, err := ps.client.Publish(presentationTopic, value).Result()
	if err != nil {
		log.WithError(err).Error("Error while publishing presentation update")
	} else {
		log.Infof("Publishing presentation update to %d clients", result)

	}
	return err
}
