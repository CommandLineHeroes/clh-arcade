#!/bin/bash

gnome-terminal --working-directory="$HOME/clh-arcade-server" -e "npm run parse-server"
gnome-terminal --working-directory="$HOME/SquareOff" -e "npm start"
gnome-terminal --working-directory="$HOME/zorbio" -e "node server/server.js"
gnome-terminal --working-directory="$HOME/clh-arcade" -e "npm run proxy"
gnome-terminal --working-directory="$HOME/clh-arcade" -e "npm run http"
gnome-terminal --working-directory="$HOME/clh-bash" -e "npm start"
