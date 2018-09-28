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

authRouter.get('/signin', auth, (req, res, next) => {
  res.cookie('Token', req.token);
  res.send(req.token);
});

authRouter.get('/oauth', (req, res, next) => {
  console.log(req.query);
  // do stuff, some kind of function call
  oauth.authorize(req)
    .then(token => {
      console.log('Token', token);
      res.cookie('Token', token);
      res.redirect(process.env.CLIENT_URL);
    })
    .catch();

});


export default authRouter;
