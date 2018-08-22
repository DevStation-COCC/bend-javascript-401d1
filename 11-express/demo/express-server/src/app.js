'use strict';

import express from 'express';
let app = express();

// Express body and URL parsers
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Our modules -- import the api and "use" it as middleware for express
import router from './api/api.js';
app.use( router );

// Flag to know if we are up and going
let isRunning = false;

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
