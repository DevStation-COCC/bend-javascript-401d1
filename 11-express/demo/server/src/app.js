'use strict';

// const express = require('express');
import express from 'express'; // Same as above, but ES6 which we can now do because of Babel
let app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

import notesRouter from './api/notesRouter.js';
app.use(notesRouter);
app.all('/*', (req, res) => {
  res.status(404).end();
});

let isRunning = false;

module.exports = {
  start: (port) => {
    if(!isRunning) {
      app.listen(port, (err) => {
        if(err) { throw err; }
        isRunning = true;
        console.log('Server is up on port', port);
      });
    }else{
      console.log('Server already running');
    }
  },
  stop: () => {
    app.close(() => {
      isRunning = false;
      console.log('Server has been shut down');
    });
  }
};