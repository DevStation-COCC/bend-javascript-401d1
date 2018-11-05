'use strict';

import express from 'express';

const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';
import oauth from './lib/oauth.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( user => res.send(user.generateToken()) )
    .catch(next);
});

authRouter.get('/login', auth, (req, res, next) => {
  res.cookie('X-Slugchat-Token', req.token);
  res.send(req.token);
});

authRouter.get('/usernames/:username', (req, res, next) => {
  let query = {username: req.params.username};
  User.findOne(query)
    .then(result => {
      result ? res.sendStatus(500) : res.sendStatus(200);
    })
    .catch(next);
});

// Google OAuth redirect
authRouter.get('/oauth/google/code', (req, res, next) => {
  // do stuff, some kind of function call
  oauth.authorize(req)
    .then(token => {
      res.cookie('X-Slugchat-Token', token);
      res.redirect(process.env.CLIENT_URL);
    })
    .catch(next);
});


// Github OAuth redirect
authRouter.get('/oauth/github/code', (req, res, next) => {
  // do stuff, some kind of function call
  oauth.authorize(req)
    .then(token => {
      res.cookie('X-Slugchat-Token', token);
      res.redirect(process.env.CLIENT_URL);
    })
    .catch(next);
});

export default authRouter;
