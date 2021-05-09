#!/bin/bash

function log {
  echo $(date) "--> " $1 >> ~/deploy.log
  sudo cp ~/deploy.log /var/www/html/deploy.log
  curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X POST --data "{\"content\": \"--> $1\"}" WEBHOOK_URL_HERE
}

cd ~/codereview.fr

log "Pulling repository..."
git pull

log "Running npm install..."
npm install

log "Building project..."
npm run build

log "Moving build in www folder..."
sudo rm -rf /var/www/html
sudo mkdir /var/www/html
sudo mv build/* /var/www/html

log "Application ready!"
