'use strict';

const express = require('express');

const jsonParser = require('body-parser').json()
const authRouter = express.Router();

const User = require('./model.js');
const auth = require('./middleware.js');
const oauth = require('./lib/oauth.js');

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/signup', jsonParser, (req, res, next) => {
  console.log('REQ:', req.body);
  let user = new User(req.body);
  console.log('USER:', user);
  user.save()
    .then( user => res.send(user.generateToken()) )
    .catch(next);
});

authRouter.get('/login', auth, (req, res, next) => {
  res.cookie('Token', req.token);
  res.send(req.token);
});

authRouter.get('/oauth', (req, res, next) => {

  let URL = process.env.CLIENT_URL;

  // Offload the oauth handshaking process to a module designed
  // to do that job. The route itself shouldn't contain any logic...
  oauth.authorize(req)
    .then ( token => {
      res.cookie('Token', token);
      res.redirect(URL);
    })
    .catch(next);
});

module.exports = authRouter;
