#!/bin/sh

if [[ -f /tmp/start-chrome-loop.pid ]]; then
    kill $(cat /tmp/start-chrome-loop.pid)
    killall google-chrome
fi

echo $$ > /tmp/start-chrome-loop.pid

while true; do google-chrome --kiosk http://127.0.0.1:1234/127.0.0.1:8765/; done
