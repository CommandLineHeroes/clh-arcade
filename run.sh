#!/usr/bin/env bash
THIS_PATH=$(dirname $(realpath run.sh))

CORSPROXY_MAX_PAYLOAD=40485760 CORSPROXY_HOST=127.0.0.1 CORSPROXY_PORT=1234 $THIS_PATH/node_modules/.bin/corsproxy
$THIS_PATH/node_modules/.bin/http-server -p 8765
