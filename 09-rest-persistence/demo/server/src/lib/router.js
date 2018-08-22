'use strict';

const parser = require('./parser.js');

const router = module.exports = {};

// This object will hold our routing table
router.routes = {};

// This is the list of REST Verbs we will accept requests for
const methods = ['GET','PUT','PATCH','POST','DELETE'];

methods.forEach( (method) => {
  /* Create a new "node" in the routing table.
     i.e.
     router.routes.GET = {}
     router.routes.POST = {}
     ...
  */
  router.routes[method] = {};

  /*
    This next bit of code creates a set of functions that will accept route definitions.
    When this completes, you will end up with functions created like
    these (below), which you can later use to create actual routes

    router.get = (path, callback) = function(path,callback) { router.routes[method][path] = callback; }
    router.post = (path, callback) = function(path,callback) { router.routes[method][path] = callback; }
    ...

    So ... if you were to do this in some other module:
      router.route.get('/foo', (req,res) => console.log("Hi"));
      router.route.get('/bar', (req,res) => console.log("Bye"));

      That would result in a new router table entries like this:

      router.GET: {
        '/foo': (req,res) => console.log("Hi")),
        '/bar': (req,res) => console.log("Bye"))
      }

  */
  router[method.toLowerCase()] = function(path, callback) {
    router.routes[method][path] = callback;
  };

});

router.route = (req,res) => {

  return parser(req)
    .then(req => {
      // Determine which of the things in the routing table matches us
      // i.e. if the request is for http://localhost/foo
      // We would look for this:  router.routes.GET['/foo'] and then run the function that's assigned
      let handler = router.routes[req.method][req.parsed.pathname];
      // If we have one, run the function contained within
      if (handler) {
        return handler(req,res);
      }
    })
    // Otherwise, bug out with an error
    .catch(err => {
      console.error('NOT_FOUND', req.parsed.pathname);
      res.statusCode = 404;
      res.statusMessage = 'Not Found';
      res.write(`Resource Not Found (${req.parsed.pathname})`);
      res.end();
    });

};
