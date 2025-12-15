#!/bin/bash

echo "Type your commit :"
read commit

git add .
git commit -m "$commit"
git push