#!/bin/bash

# TODO: abort if there are un-committed changes

CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
CURRENT_SHA=$(git rev-parse --short HEAD)

npm install
npm run build
git checkout -b $CURRENT_BRANCH+release
git add -f dist
git commit -am "Releasing $CURRENT_SHA"
git push -f origin HEAD
git checkout -
