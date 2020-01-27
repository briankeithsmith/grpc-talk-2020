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
echo "Building image voting-record-server:$version"

docker build -t "voting-record-server:$version" "$sourceDir/server"