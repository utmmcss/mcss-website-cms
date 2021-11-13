#!/bin/bash
date=$(date '+%Y-%m-%d-%H:%M:%S')
folder="dump-${date}"
mkdir $folder
cp .tmp/data.db $folder/
cp -r public/uploads $folder/
rm $folder/uploads/.gitkeep

