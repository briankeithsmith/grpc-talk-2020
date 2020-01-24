#! /bin/bash

source=$(realpath $BASH_SOURCE)
scriptsDir=$(dirname $source)
sourceDir=$(dirname $scriptsDir)
rootFolder=$(dirname $sourceDir)

protosFolder=$(realpath $rootFolder/protos)
destFolder=$(realpath $sourceDir/presentation)
$rootFolder/code-generator/run.sh $protosFolder $destFolder "go"