'use strict';

require('dotenv').config({path:`${__dirname}/../../../.env`});
const mongoose = require('mongoose');
const superagent = require('superagent');
const app = require('../../../src/app.js');

describe('/upload', () => {

  beforeAll( () => {
    mongoose.connect(process.env.MONGODB_URI);
    app.start(process.env.PORT);
  });

  afterAll( () => {
    app.stop();
    mongoose.connection.close();
  })

  it('uploads a file', () => {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjViMTk0YWJjOTkzYWMxZjBjZTFhMjJiZSIsImlhdCI6MTUyODM5ODQzOH0.Xq44horcJNd1wSKABa_ElV9DRiaRTFsVepowlyMuOGg';

    return superagent.post( `${process.env.API_URL}/upload` )
      .set('Authorization', `Bearer ${token}`)
      .attach('img', `${__dirname}/asset/mario-sell.gif`)
      .then(res => {
        console.log(res.body);
        expect(res.status).toEqual(200);
        expect(res.body.url).toBeTruthy();
      });
  });

});