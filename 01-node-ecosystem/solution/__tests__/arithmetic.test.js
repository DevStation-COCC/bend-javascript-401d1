'use strict';

const assert = require('assert');
const arithmetic = require('../lib/arithmetic.js');

// Tests are documentation.  Is there any need to comment what these are doing?  NOT.
assert.strictEqual( arithmetic.add('foo',4), null, 'Strings not permitted' );
assert.strictEqual( arithmetic.add({},4), null, 'Objects not permitted' );
assert.strictEqual( arithmetic.add([],4), null, 'Arrays not permitted' );
assert.strictEqual( arithmetic.add(4), null, 'Need at least 2 arguments' );
assert.strictEqual( arithmetic.add(1,4), 5, 'Basic math eludes me?' );

assert.strictEqual( arithmetic.subtract('foo',4), null, 'Strings not permitted' );
assert.strictEqual( arithmetic.subtract({},4), null, 'Objects not permitted' );
assert.strictEqual( arithmetic.subtract([],4), null, 'Arrays not permitted' );
assert.strictEqual( arithmetic.subtract(4), null, 'Need at least 2 arguments' );
assert.strictEqual( arithmetic.subtract(4,1), 3, '(4-1) Basic math eludes me?' );
assert.strictEqual( arithmetic.subtract(1,4), -3, '(1-4) Basic math eludes me?' );
assert.strictEqual( arithmetic.subtract(-3,-3), 0, '(-3 - -3) Basic math eludes me?' );
