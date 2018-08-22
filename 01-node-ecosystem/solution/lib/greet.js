'use strict';

module.exports = (...args) => {
  if ( args.length !== 1 ) { return null; }
  if ( typeof args[0] !== 'string' ) { return null; }
  return greet() + args[0];
};

function greet() {
  return 'Hello, ';
}