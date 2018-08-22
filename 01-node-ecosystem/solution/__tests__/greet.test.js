'use strict';

const assert = require('assert');

const greet = require('../lib/greet.js');

// Tests are documentation.  Is there any need to comment what these are doing?  NOT.
assert.strictEqual(greet(), null, 'One parameter is required');
assert.strictEqual(greet('john', 'cathy'), null, 'Only One parameter is permitted');
assert.strictEqual(greet(1), null, 'Numeric Values Should Not Be Permitted');
assert.strictEqual(greet([]), null, 'Arrays Should Not Be Permitted');
assert.strictEqual(greet({}), null, 'Objects Should Not Be Permitted');
assert.strictEqual(greet(false), null, 'Booleans Should Not Be Permitted');
assert.strictEqual(greet(true), null, 'Booleans Should Not Be Permitted');

assert.strictEqual(greet('John'), 'Hello, John', `Output string does not match required (actual: "${greet('John')}", expected: "Hello, John")`);
