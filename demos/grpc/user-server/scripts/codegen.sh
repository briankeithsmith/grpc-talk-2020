
#! /bin/bash

set -e 
sourceFolder=$(realpath ../../protos)
destFolder=$(realpath ../src/protos)

cp -r "$sourceFolder" $destFolder