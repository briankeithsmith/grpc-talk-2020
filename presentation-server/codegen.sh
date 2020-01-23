#! /bin/bash

sourceFolder=$(realpath ../protos)
destFolder=$(realpath ./presentation)
../code-generator/run.sh $sourceFolder $destFolder "go"