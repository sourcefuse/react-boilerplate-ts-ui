#!/bin/bash

# TODO: implement tagging mechanism
VERSION=$(cat .version | tr -d " \t\n\r")

docker login --username $DOCKERHUB_USERNAME --password $DOCKERHUB_PASSWORD
docker build -t sourcefuse/react-boilerplate-ui:$VERSION .
docker push sourcefuse/react-boilerplate-ui:$VERSION
