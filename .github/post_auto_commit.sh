#!/usr/bin/env bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

cd ${DIR}/..

# see https://docs.github.com/en/actions/learn-github-actions/environment-variables
if [[ "${GITHUB_ACTIONS}" ]] ; then
  git config --global user.email "actions@github.com"
  git config --global user.name "Github Actions"
fi

if [[ $(git status --porcelain) ]]; then
  git add .
  git commit -m "build: skip ci"
  git push origin main
else
  echo "no changes"
fi
