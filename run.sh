#!/usr/bin/env bash
SCRIPTPATH="$( cd "$(dirname "$0")" ; pwd -P )"
ARCADE_WEBROOT="$SCRIPTPATH/../lib/node_modules/clh-arcade"
GAMES_WEBROOT="./"

CORSPROXY_MAX_PAYLOAD=40485760 CORSPROXY_HOST=127.0.0.1 CORSPROXY_PORT=1234 $SCRIPTPATH/../lib/node_modules/clh-arcade/node_modules/.bin/corsproxy &
$SCRIPTPATH/../lib/node_modules/clh-arcade/node_modules/.bin/http-server --cors -p 8765 $ARCADE_WEBROOT &
$SCRIPTPATH/../lib/node_modules/clh-arcade/node_modules/.bin/http-server --cors -p 8766 $GAMES_WEBROOT &

echo "Launched Command Line Heroes Arcade!"
echo
echo "  Arcade: $ARCADE_WEBROOT"
echo "  Games:  $GAMES_WEBROOT"
