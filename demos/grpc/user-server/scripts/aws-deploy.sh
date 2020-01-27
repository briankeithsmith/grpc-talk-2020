#! /bin/bash

set -e


version=$(git rev-parse --short HEAD)
version="temp"
env=$1

echo "Deploying version $version and deploying to environment $env"

source=$(realpath $BASH_SOURCE)
scriptsDir=$(dirname $source)
sourceDir=$(dirname $scriptsDir)
rootFolder=$(dirname $sourceDir)



containerName="abvaden/grpc-demo-users-server:$version"
echo "Building image $containerName"

docker build -t $containerName "$sourceDir"
docker push $containerName

cd "$sourceDir/kube/overlays/$env"
kustomize edit set image demo-grpc-users=$containerName
kustomize build | kubectl apply -f -
