'use strict';

/**
 * This module pulls in all of the others (it's the full app)
 * @type {*|EE}
 */
let app = require('./app.js');

// Each of these will have event listeners and triggers in them.  Since they're all loaded
// after app.js, and they all require app.js, they will have access to the events constructor
// and methods in app.js.
let listeners = require('./listeners.js');
let moreListeners = require('./more-listeners.js');
let events = require('./events.js');

// Fire some events and start off the chain ...
events.fire();
