'use strict';

require('dotenv').config();

// Turn us into ES6!!
require('babel-register');

const app = require('./src/app');
app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
