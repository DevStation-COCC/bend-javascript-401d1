'use strict';

// Debug Utility (needs to be required in the old node way)
const debug = require('debug')('app');

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';

let app = express();

/**
 * Setup CORS Restrictions using the "cors" middleware
 * set "origin" to be any domain (or domains) that you want to allow access
 * to your endpoints. If you omit corsOptions from the middleware call, then your
 * API will be wide open and easily testable.  However, in the real world, you'll
 * want to have some restrictions.
 *
 * To see this in action, use the "index.html" and put it up on some website
 * and then open it and look at the console.  Then, change this setting to point
 * to the domain where you installed index.html and you should then see your data
 * in the console.
 * @type {{origin: string}}
 */
let corsOptions = {
  origin: 'http://example.com'
};
app.use(cors(corsOptions));

// Morgan Middleware does some really cool (and customziable access logs)
app.use(morgan('dev'));

// Built-In Express Body Parser for raw JSON and for FORM posts
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Our API
import router from './api/api.js';
app.use(router);

// Our 404 Handling Middleware
app.use(notFound);

// Our Error Handling Middleware
app.use(errorHandler);

// Flag to know if we are up and going
let isRunning = false;

// Q: Why do we have a start/stop that we are exposing?
// A: So that we can start and stop the server while we are testing the routes
module.exports = {
  start: (port) => {
    if(! isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        isRunning = true;
        debug('Server is up on port', port);
      });
    }
    else {
      debug('Server is already running');
    }
  },

  stop: () => {
    app.close( () => {
      isRunning = false;
      console.log('Server has been stopped');
    });
  },
};
