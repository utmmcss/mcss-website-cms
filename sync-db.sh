#!/bin/bash
. ./settings.config

mkdir -p .tmp
rm -rf .tmp/*
scp "$USERNAME"@mcss-cms.utm.utoronto.ca:/var/www/html/.tmp/data.db ./.tmp/data.db

rm -rf public/*
scp -r "$USERNAME"@mcss-cms.utm.utoronto.ca:/var/www/html/public ./public
