#!/bin/bash

echo "|============================|"
echo "|  DEPLOYING ON GITHUB PAGES |"
echo "|============================|"

sudo git checkout ghpages || git checkout -b ghpages;
sudo git merge main;
sudo git push origin ghpages || git push --set-upstream ghpages;

echo "Project deployed on https://raphaelbr.dev | https://raphaelbrodrigues.github.io/raphaelbr.dev"

sudo git checkout main;