# MCSS CMS Setup

This repository contains the source code for the CMS for the website

![example workflow](https://github.com/utmmcss/mcss-website-cms/actions/workflows/cd.yml/badge.svg)

## Setup
### Generate the correct credentials
Since the CMS is served on a UTM server, you will need to setup the correct ssh credentials in order to access the production database:
1. run `ssh-keygen -t rsa -b 2048` to generate a key. If you already have a ssh key, you can skip this step
2. run `ssh-copy-id mcss-cms@mcss-cms.utm.utoronto.ca` to copy the key to the server. The password to the account is in the tech team mcss google drive (ask for permission to access it)
3. run `ssh mcss-cms@mcss-cms.utm.utoronto.ca` and you should not be prompted for a password anymore. 
4. run `cat ~/.ssh/authorized_keys` to ensure your key was added correctly and you didn't add any key you don't want

### Setup for Local Development
1. run `git clone https://github.com/utmmcss/mcss-website-cms` to clone the repo
2. run `npm ci` to install the necessary packages
3. download `setttings.config` from the tech team google drive and put it in the root of the project
4. run `sh sync-db.sh` to pull the latest data from production (this may take a while) 
5. run `npm run dev` to serve up the application
6. go to server (eg. `localhost:1337/admin`) and login with your account. If you don't have an account, ask one of the executives to setup an account for you on the production database and repeat step 4


## Development
Now that you CMS is up and running, make the necessary changes and make a pull request (PR). Below is the general flow of our development process: 
1. Create ticket on trello
2. Make changes on new branch
3. Make a PR
4. Merge PR into master

Note: There is a GitHub Action setup to automatically deploy the changes once it's merged into master.
