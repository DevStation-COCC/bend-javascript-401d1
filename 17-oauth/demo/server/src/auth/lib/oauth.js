'use strict';

import superagent from 'superagent';

import User from '../model';


const authorize = (req) => {

  let code = req.query.code;

  console.log('(1) code: ', code);

  return superagent.post('https://www.googleapis.com/oauth2/v4/token')
    .type('form')
    .send({
      code: code,
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.API_URL}/oauth`,
      grant_type: 'authorization_code'
    })
    .then(response => {
      let googleToken = response.body.access_token;
      console.log('(2) google token: ', googleToken);
      return googleToken;
    })
    .then(googleToken => {
      return superagent.get('https://www.googleapis.com/plus/v1/people/me/openIdConnect')
        .set('Authorization', `Bearer ${googleToken}`)
        .then(response => {
          let user = response.body;
          console.log('(3) Google User: ', user);
          return user;
        });
    })
    .then(googleUser => {
      console.log('(4) Create Account');
      return User.createFromOAuth(googleUser);
    })
    .then(user => {
      console.log('(5) Created User, generate token...');
      return user.generateToken();
    })
    .catch(err => console.error(err));
};

export default {authorize};
