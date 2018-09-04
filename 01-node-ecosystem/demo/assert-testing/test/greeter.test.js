const assert = require('assert'); //Built-in library for Node
const greeter = require('../lib/greeter'); //The module we are testing

/*

While writing tests stick to AAA:

Arrange
Act
Assert

First we Arrange the data that we want to test
Then we Act upon that data (in this case calling the function we are testing)
Then we Assert that the result of the Act is what we'd expect

*/

let actual = greeter.sayHello('Adam');
let expected = 'Hello Adam';
// message is what will be displayed to the user if a test fails
let message = `Output does not match (actual: ${actual}, expected: ${expected})`;
// strictEqual will compare Strings, Numbers, Booleans, etc. but will NOT properly compare Arrays or Objects
assert.strictEqual(actual, expected, message);


actual = greeter.sayGoodbye('Adam');
expected = 'Goodbye Adam';
message = `Output does not match (actual: ${actual}, expected: ${expected})`;
assert.strictEqual(actual, expected, message);
