'use strict';

/**
 * This simulates a large scale application, which sets up some global eventing objects
 * Any module that requires this in can pub/sub using "events" ...
 * @type {{}}
 */
let EE = require('events');

let events = new EE();

module.exports = events;
