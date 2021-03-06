#! /bin/bash

set -e


version=$(git rev-parse --short HEAD)
env=$1

echo "Deploying version $version and deploying to environment $env"

source=$(realpath $BASH_SOURCE)
scriptsDir=$(dirname $source)
sourceDir=$(dirname $scriptsDir)
rootFolder=$(dirname $sourceDir)



containerName="abvaden/demo-grpc-record-server:$version"
echo "Building image $containerName"

docker build -t $containerName "$sourceDir/server"
docker push $containerName

cd "$sourceDir/kube/overlays/$env"
kustomize edit set image record-server=$containerName
kustomize build | kubectl apply -f -
