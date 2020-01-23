FROM ubuntu:18.04


ENV GO_VERSION=1.13.5
ENV OS linux
ENV ARCH amd64

RUN apt-get update

# Install node
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash
RUN apt-get install -y nodejs

# Install protoc
RUN apt-get install -y wget unzip
RUN wget https://github.com/protocolbuffers/protobuf/releases/download/v3.10.0/protoc-3.10.0-linux-x86_64.zip 
RUN unzip -o protoc-3.10.0-linux-x86_64.zip -d /usr/local bin/protoc
RUN unzip -o protoc-3.10.0-linux-x86_64.zip -d /usr/local 'include/*'

# Install GRPC web code genertor
RUN wget https://github.com/grpc/grpc-web/releases/download/1.0.6/protoc-gen-grpc-web-1.0.6-linux-x86_64
RUN mv ./protoc-gen-grpc-web-1.0.6-linux-x86_64 /usr/local/bin/protoc-gen-grpc-web
RUN chmod +x /usr/local/bin/protoc-gen-grpc-web

# RUN npm install -g grpc-web

# Install go
RUN apt-get install git -y
RUN wget https://dl.google.com/go/go$GO_VERSION.$OS-$ARCH.tar.gz
RUN tar -C /usr/local -xzf go$GO_VERSION.$OS-$ARCH.tar.gz
ENV PATH="${PATH}:/usr/local/go/bin"

# Install go protobuf codegenerator
RUN go get github.com/golang/protobuf/protoc-gen-go
RUN go install github.com/golang/protobuf/protoc-gen-go
RUN cp /root/go/bin/protoc-gen-go /usr/local/go/bin/protoc-gen-go

RUN mkdir /source/
RUN mkdir /output/

COPY /package.json /app/package.json
COPY /package-lock.json /app/package-lock.json
WORKDIR /app/
RUN npm ci
COPY /codegen.ts /app/codegen.ts

ENTRYPOINT [ "node", "-r", "ts-node/register", "/app/codegen.ts" ]