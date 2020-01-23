#! /bin/bash

# Script should be called with 3 arguments, 
# - The root directory of the repo to convert 
# - The output folder for the generated code
# - The type of code to be generated

[[ ! -v $2 ]] && mkdir -p $2

# Get the directory of the script so that docker knows where the build context is
dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"

# Build and run the docker container
# you can add --rm if you want to clean up the container after running the codegen
docker run -it \
  -v $1:/source/:ro \
  --mount type=bind,source=$2,target=/output \
  --rm \
  -u $(id -u) \
  $(docker build -q $dir) "$3"

if [ ! $? -eq 0 ]
then
  echo "Codegen failed"
  exit 1
fi