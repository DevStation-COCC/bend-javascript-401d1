'use strict';

// Pull in the app, which has the global event object
let events = require('./app.js');

// When any module fires any event that I care about, these functions will run.
events.on('bark', () => console.log('Woof!') );
events.on('rub the tummy', () => console.log('yeah .... thats the stuff...') );
events.on('purr', () => {
  console.log('pgpgpgpgpggpgp');
  events.emit('pet');
});

