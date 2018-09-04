/*
Our module assigned module.exports and exports with a function. Now the require will return that very function back to us to use.

That is to say, greet will be a FUNCTION that takes a name parameter.
*/
const greet = require('./lib/greet.js');

console.log(greet('Adam')); //expected: Hello Adam