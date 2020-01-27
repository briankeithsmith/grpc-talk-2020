package main

import (
	"errors"
	"fmt"
	log "github.com/sirupsen/logrus"
	"net/http"
	"strconv"
)

//CheckForProfanity .. Calls a 3rd party service to check to see if the input string contains profanity
func CheckForProfanity(value string) (bool, error) {
	url := fmt.Sprintf("https://www.purgomalum.com/service/containsprofanity?text=%s", value)
	response, err := http.Get(url)
	if err != nil {
		return true, err
	}

	buffer := make([]byte, 255)
	bytesRead, err := response.Body.Read(buffer)
	if err != nil {
		return true, err
	}

	if bytesRead >= len(buffer) {
		log.Warn("Response buffer not large enough")
		return true, errors.New("Response to large")
	}

	bodyString := string(buffer[0:bytesRead])
	b, err := strconv.ParseBool(bodyString)
	if err != nil {
		log.Warnf("Could not parse response body (%f) as boolean", bodyString)
	}

	return b, nil
}
