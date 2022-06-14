#!/bin/bash
cd /home/ubuntu/conimals/server
authbind --deep pm2 start app.js
