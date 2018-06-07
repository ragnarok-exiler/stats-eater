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
sudo npm install -g create-react-app
create-react-app /tmp/react_vagrant
cd ~/code/front
sudo rm -rf node_modules/
cp -R /tmp/react_vagrant/node_modules/ node_modules/
sudo rm -rf /tmp/react_vagrant