'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then((user) => res.send(user.generateToken()))
    .catch(next);
});

authRouter.post('/signin', auth, (req, res, next) => {
  res.cookie('Token', req.token);
  res.send(req.token);
});

authRouter.get('/showMeTheMoney', auth, (req, res, next) => {
  res.send('CA$H MONEY!'); // some data that only an auth user can view
});

export default authRouter;
