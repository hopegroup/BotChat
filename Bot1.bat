@echo off

cls

node main.js

git add .

git commit -m "restet "

git push origin master

git pull

start Bot1.bat

exit
