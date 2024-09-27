#!/usr/bin/env node

const httpServer = require("http-server");

const ARCADE_WEBROOT = __dirname;
const ARCADE_PORT = 1234;
const ARCADE_HOST = "0.0.0.0";

const GAMES_WEBROOT = process.cwd();
const GAMES_PORT = 1235;
const GAMES_HOST = "0.0.0.0";

// games server
httpServer
  .createServer({
    cors: true, // add wildcare cors headers
    cache: -1, // don't browser-cache anything (this is always local so it's unnecessary)
    root: GAMES_WEBROOT,
  })
  .listen(GAMES_PORT, GAMES_HOST);

// arcade UI server
httpServer
  .createServer({
    cors: true, // add wildcare cors headers
    cache: -1, // don't browser-cache anything (this is always local so it's unnecessary)
    root: ARCADE_WEBROOT,
    proxy: `http://${GAMES_HOST}:${GAMES_PORT}`,
  })
  .listen(ARCADE_PORT, ARCADE_HOST);

console.log("Launched Command Line Heroes Arcade!");
console.log("");
console.log(`  Arcade: ${ARCADE_WEBROOT}`);
console.log(`  Games:  ${GAMES_WEBROOT}`);
console.log("");
console.log(`Server running on http://${ARCADE_HOST}:${ARCADE_PORT}`);
