'use strict';

// Pull in the app, which has the global event object
let events = require('./app.js');

module.exports = exports = {};

// Using that global event object, fire off some events.
exports.fire = () => {
  events.emit('bark');
  events.emit('purr');
};

