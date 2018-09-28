'use strict';

import express from 'express';
import authenticator from './middleware';
const authRouter = express.Router();

import User from './user';

authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body); // Build user based on body of POST request
  user.save()
    .then(user => res.send(user.generateToken())) // When a user is saved, generate a token
    .catch(next);
});

authRouter.get('/signin', authenticator, (req, res, next) => {
  // Generic response, this is not fullybaked
  res.cookie('Token', req.token);
  res.send('Hello');
});

export default authRouter;
