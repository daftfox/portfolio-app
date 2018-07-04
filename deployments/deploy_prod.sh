#!/bin/bash

rsync -arve "ssh $SSH_OPTIONS" --no-perms --no-owner --no-group --delete --exclude '.git' ./dist/ root@$DEPLOY_HOST:/var/www/portfolio/
