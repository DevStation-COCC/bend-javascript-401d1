'use strict';

require('babel-register');
const superagent = require('superagent');
const app = require('../../../src/app.js');

describe('API', () => {

  const PORT = 8888;
  beforeAll( () => {
    app.start(PORT);
  });
  afterAll( () => {
    app.stop();
  });

  it('gets a 200 response on a good model', () => {
    return superagent.get('http://localhost:8888/api/v1/bar')
      .then(response => {
        expect(response.statusCode).toEqual(200);
      })
      .catch(console.err);
  });

  it('gets a 200 response and model with id', () => {
    return superagent.get('http://localhost:8888/api/v1/bar/42')
      .then(res => {
        expect(res.body.id).toBe(42);
      });
  });

  it('gets a 500 response on an invalid model', () => {
    return superagent.get('http://localhost:8888/api/v1/foobar')
      .then(console.log)
      .catch(response => {
        expect(response.status).toEqual(500);
      });
  });

});
