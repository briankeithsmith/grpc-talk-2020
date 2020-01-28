#! /bin/bash

source=$(realpath $BASH_SOURCE)
scriptsDir=$(dirname $source)
sourceDir=$(dirname $scriptsDir)
rootFolder=$(dirname $sourceDir)

version="1"

if [ $1 ] 
then
    version=$1
fi
echo "Building image poll-summary-server:$version"

docker build -t "poll-summary-server:$version" "$sourceDir/server"