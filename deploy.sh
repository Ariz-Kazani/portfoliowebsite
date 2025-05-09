#!/bin/bash

echo "Setting up environment for production deployment..."

echo VITE_MODE=prod > .env

echo "Building the project..."

npm run build
if [ $? -ne 0 ]; then
    exit 1
fi

echo "Deploying to firebase..."

firebase deploy