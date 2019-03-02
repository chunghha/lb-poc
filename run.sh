#!/usr/bin/env bash

docker build . -t lb-poc
docker run -it -p 3000:3000 lb-poc
