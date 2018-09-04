/*

In this example the zoo variable will be an object, not a function. But that object just so happens to have multiple functions that we can access.

*/
const zoo = require('./lib/zoo.js');

console.log(zoo);

console.log(zoo.lion()); //expected: ROAR

console.log(zoo.gorilla()); //expected: SMASH!!!

console.log(zoo.penguin()); //expected: waddlewaddle