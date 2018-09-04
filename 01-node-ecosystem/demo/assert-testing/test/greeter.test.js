const assert = require('assert');
const greeter = require('../lib/greeter');

// AAA
// Arrange
// Act
// Assert

let actual = greeter.sayHello('Adam');
let expected = 'Hello Adam';
let message = `Output does not match (actual: ${actual}, expected: ${expected})`;
assert.strictEqual(actual, expected, message);


actual = greeter.sayGoodbye('Adam');
expected = 'Goodbye Adam';
message = `Output does not match (actual: ${actual}, expected: ${expected})`;
assert.strictEqual(actual, expected, message);
