'use strict';

let parser = require('../../../src/lib/parser.js');

describe('URL Parser', () => {

  it('requires a request object', () => {
    let req = undefined;
    return parser(req)
      .then( response => false )
      .catch( err => expect(err).toBeDefined() );
  });

  it('requires a req object with a url', () => {
    let req = {};
    return parser(req)
      .then( response => false )
      .catch( err => expect(err).toBeDefined() );
  });

  it('given a url returns an object', () => {
    let req = { url: 'http://localhost' };
    return parser(req)
      .then( request => expect(typeof request.url).toEqual('object') )
      .catch( err => false );
  });

  it('given a complicated url, does all the things', () => {
    let req = { method:'GET', url: 'http://localhost?a=b&c=d' };
    return parser(req)
      .then( request => {
        expect(request.url.query.a).toEqual('b');
        expect(request.url.query.c).toEqual('d');
      })
      .catch( console.error );
  });

});
