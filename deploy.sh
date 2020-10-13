#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd build

git init
git add -A
git commit -m 'deploy'


# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:123ishaTest/incremental-game-template-website.git master:gh-pages
cd -

rm -rf ./build
