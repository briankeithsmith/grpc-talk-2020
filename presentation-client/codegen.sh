
#! /bin/bash

sourceFolder=$(realpath ../protos)
destFolder=$(realpath ./src/api)
../code-generator/run.sh $sourceFolder $destFolder "grpc-web"