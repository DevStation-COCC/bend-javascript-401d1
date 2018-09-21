'use strict';

// Pull in all of our possible storage modules
import memoryStorage from './memory.js';
import fileStorage from './filesystem.js';

let dataStorageModule = {};

// Based on an entry in our .env file (or really any other mechanism you want)
// Switch this module to export THAT storage mechanism
// This allows this application to dynamically switch out storage systems based
// on any logic you choose
switch( process.env.STORAGE ) {
case 'filesystem':
  dataStorageModule = fileStorage;
  break;
default:
  dataStorageModule = memoryStorage;
  break;
}

export default dataStorageModule;
