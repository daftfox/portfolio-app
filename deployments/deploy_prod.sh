#!/bin/bash

rsync -arve "ssh $SSH_OPTIONS" --no-perms --no-owner --no-group --delete --exclude '.git' ./dist/ root@139.162.179.147:/var/www/html/
