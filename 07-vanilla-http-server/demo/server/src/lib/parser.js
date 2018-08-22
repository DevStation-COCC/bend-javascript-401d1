'use strict';

// First Party Modules
const url = require('url');
const queryString = require('querystring');

module.exports = (req) => {

  return new Promise( (resolve,reject) => {

    if( !(req || req.url) ) { reject('Invalid Request Object. Cannot Parse'); }

    // req.url = http://localhost:3000/api/v1/notes?id=12345
    req.parsed = url.parse(req.url);
    /*
        req.parsed = {
          pathname: '/api/vi/notes',
          query: '?id=12345&name=John',
        }
       */

    req.query = queryString.parse(req.parsed.query);
    /*
        req.query = {
          id:12345,
          name:'John'
        }
       */

    if(! req.method.match(/POST|PUT|PATCH/) ) {
      resolve(req);
    }

    let text = '';

    req.on('data', (buffer) => {
      text += buffer.toString();
    });

    req.on('end', () => {
      try{
        req.body = JSON.parse(text);
        resolve(req);
      }
      catch(err) { reject(err); }

    });

    req.on('err', reject);

  });

};
