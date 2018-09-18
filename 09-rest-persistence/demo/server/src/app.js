'use strict';

// First Party Modules
let http = require('http');

// Our modules
const router = require('./lib/router.js');
const api = require('./api/api.js');

// Flag to know if we are up and going
let isRunning = false;

// This will open up an http server connection, using router.route
// as our entry point.  That method will get run on every connection
const app = http.createServer( router.route );

module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        // Tick the running flag
        isRunning = true;
        console.log('Server is up on port', port);
      });
    }
    else {
      console.log('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};
