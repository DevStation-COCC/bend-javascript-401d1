'use strict';

const debug = require('debug')('api');

import express from 'express';

// The express router replaces our home-built custom router
const router = express.Router();

// modelFinder middleware reads :model in the URLs and susses out the right model to use.
// As you'll see, it gets jacked on to req.model so that you can reference it in your routes
import modelFinder from '../middleware/models.js';
router.param('model', modelFinder);

/**
 * Render all records of a model
 * Note the error handling ....
 * Typically, you can just throw an error and your error handling middleware will run
 * In a promise, that doesn't work, but if you call next() with any params, Express
 * sees that as an error (the presence of a param) and calls your error middleware...
 */
router.get('/api/v1/:model', (req,res,next) => {
  debug('get all');
  req.model.fetchAll()
    .then(data => sendJSON(res,data))
    .catch(next);
});

router.get('/api/v1/:model/:id', (req,res,next) => {
  req.model.findOne(req.params.id)
    .then(data => sendJSON(res,data))
    .catch(next);
});

router.post('/api/v1/:model', (req,res,next) => {
  let record = new req.model(req.body);
  record.save()
    .then(data => sendJSON(res,data))
    .catch(next);
});

/**
 * Simple method to send a JSON response (all of the API methods will use this)
 * This could be done as middleware if you were to configure each route with it
 * and set something like the "data" object onto the response object, then that
 * middleware could read that and spit it out.  Food for thought.
 * @param res
 * @param data
 */
let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};


export default router;
