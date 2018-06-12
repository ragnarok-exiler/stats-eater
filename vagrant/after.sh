#!/bin/sh

# If you would like to do some extra provisioning you may
# add any commands you wish to this file and they will
# be run after the Homestead machine is provisioned.

# Initialize laravel project in  ~/code/api
cd ~/code/api
composer install
rm .env
sudo cp .env.example .env
php artisan key:generate

# Initialize react project in ~/code/front

cd ~/code/front
sudo rm -rf node_modules/ yarn.lock package-lock.json
sudo yarn install
