'use strict';

let events = require('./app.js');

events.on('bark', () => console.log('yip yip') );
events.on('purr', () => console.log('meow?') );
events.on('pet', () => {
  console.log('thanks, I needed that!');
  events.emit('rub the tummy');
});

