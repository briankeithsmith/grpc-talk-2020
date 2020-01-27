package main

import (
	"fmt"
	"github.com/go-redis/redis/v7"
	log "github.com/sirupsen/logrus"
	"os"
	"sync"
)

var (
	redisOnce   sync.Once
	redisClient redis.Client
	clientErr   error
)

// GetRedisClient .. Get a in instance to the shared redis client
func GetRedisClient() (*redis.Client, error) {
	redisOnce.Do(func() {
		redisHost := os.Getenv("REDIS_HOST")
		redisPort := os.Getenv("REDIS_PORT")
		if redisHost == "" {
			redisHost = "localhost"
		}
		if redisPort == "" {
			redisPort = "6379"
		}

		redisURL := fmt.Sprintf("%s:%s", redisHost, redisPort)
		log.Infof("Connecting to redis at %s", redisURL)
		client := redis.NewClient(&redis.Options{
			Addr:     redisURL,
			Password: "", // no password set
			DB:       0,  // use default DB
			OnConnect: func(conn *redis.Conn) error {
				log.Println("Redis connection established")
				return nil
			},
		})

		_, err := client.Ping().Result()
		if err != nil {
			log.WithError(err).Error("Error while starting redis client, ping response has error")
			client.Close()
			clientErr = err
			return
		}

		redisClient = *client
	})

	if clientErr != nil {
		return nil, clientErr
	}
	return &redisClient, nil
}
