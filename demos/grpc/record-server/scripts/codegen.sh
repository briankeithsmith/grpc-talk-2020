#! /bin/bash

source=$(realpath $BASH_SOURCE)
scriptsDir=$(dirname $source)
sourceDir=$(dirname $scriptsDir)
rootDemoFolder=$(dirname $sourceDir)
rootFolder=$(realpath $rootDemoFolder/../../)

protosFolder=$(realpath $rootDemoFolder/protos)
destFolder=$(realpath $sourceDir/server/voting)
$rootFolder/code-generator/run.sh $protosFolder $destFolder "go"