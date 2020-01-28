FROM golang:1.13.6-alpine3.10 as build

WORKDIR /app/
#COPY go.mod /app/go.mod
#COPY go.sum /app/go.sum
COPY . .
RUN go get
RUN go build -o server

FROM alpine
COPY --from=build /app/server /app/server
ENTRYPOINT /app/server