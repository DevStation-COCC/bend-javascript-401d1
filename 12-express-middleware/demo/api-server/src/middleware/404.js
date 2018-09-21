'use strict';


// I didn't pull in the express module so I'm just building a vanilla http response
let notFound = (req, res, next) => {
  let error = { error:'Resource Not Found' };
  res.statusCode = 404;
  res.statusMessage = 'Not Found';
  res.setHeader('Content-Type', 'application/json');
  res.write(JSON.stringify(error));
  res.end();
};

export default notFound;