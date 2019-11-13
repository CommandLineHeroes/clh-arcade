#!/usr/bin/env bash

CORSPROXY_MAX_PAYLOAD=40485760 CORSPROXY_HOST=127.0.0.1 CORSPROXY_PORT=1234 ./node_modules/.bin/corsproxy
./node_modules/.bin/http-server -p 8765
