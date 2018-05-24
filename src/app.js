'use-strict';

const http = require('http');

const router = require('./lib/router.js');
const api = require('./lib/api.js');
let isRunning = false;

const app = http.createServer(router.route);

module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        isRunning = true;
        console.log('Server is up on port', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    console.log('Not implemented');
  },
};