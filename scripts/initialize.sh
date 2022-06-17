#!/bin/bash
cd /home/ubuntu/conimals/server
sudo npm install -g n
sudo n 17.5.0
npm install pm2@latest -g
sudo apt-get update
sudo apt-get install authbind
sudo touch /etc/authbind/byport/80
sudo chown ubuntu /etc/authbind/byport/80
sudo chmod 755 /etc/authbind/byport/80