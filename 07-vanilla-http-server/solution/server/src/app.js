'use strict';

const http = require('http');
const fs = require('fs');

const cowsay = require('cowsay');

const parser = require('./lib/parser');

const requestHandler = (req,res) => {

  let errorPage = (err) => {
    console.log(err);
    res.writeHead(500);
    res.write(err.message);
    res.end();
  };

  parser(req)
    .then( req => {

      if ( req.method === 'GET' && req.parsed.pathname === '/' ) {
        fs.readFile( `${__dirname}/../public/index.html`, (err,data) => {
          if ( err ) { return errorPage(); }
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.statusMessage = 'OK';
          res.write(data.toString());
          res.end();
          return;
        });

      }
      else if ( req.method === 'GET' && req.parsed.pathname === '/cowsay' ) {
        fs.readFile( `${__dirname}/../public/cowsay.html`, (err,data) => {
          if ( err ) { return errorPage(); }
          let html = data.toString();
          let text = cowsay.say({text: req.query.text});
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.statusMessage = 'OK';
          res.write( html.replace('{{cowsay}}', text) );
          res.end();
        });
      }
      else if ( req.method === 'POST' && req.parsed.pathname === '/cowsay' ) {
        fs.readFile( `${__dirname}/../public/cowsay.html`, (err,data) => {
          if ( err ) { return errorPage(); }

          let content = '';
          if ( ! req.body ) { content = 'Invalid request: body required'; }
          else if ( req.body.text ) { content = cowsay.say({text: req.body.text}); }
          else { content = 'Invalid content: text query required'; }

          let obj = { content: content };
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.statusMessage = 'OK';
          res.write( JSON.stringify(obj) );
          res.end();
        });
      }
      else {
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 404;
        res.statusMessage = 'Not Found';
        res.write('Resource Not Found');
        res.end();
      }

    }) // closes the "then" of the parser promise
    .catch(errorPage);
};

const app = http.createServer(requestHandler);

module.exports = {
  start: (port,callback) => app.listen(port,callback),
  stop: (callback) => app.close(callback),
};
