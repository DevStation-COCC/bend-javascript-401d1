'use strict';

const debug = require('debug')('api');

import express from 'express';

const router = express.Router();

router.param('model', modelFinder);

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

let sendJSON = (res,data) => {
  res.statusCode = 200;
  res.statusMessage = 'OK';
  res.setHeader('Content-Type', 'application/json');
  res.write( JSON.stringify(data) );
  res.end();
};


export default router;
