'use strict';

const memory = require('../storage/memory.js');
const filesystem = require('../storage/filesystem.js');

let dataStorageModule = {};

switch(process.env.STORAGE){
  case 'filesystem':
    dataStorageModule = filesystem;
    break;
  default:
    dataStorageModule = memory;
    break;
}

module.exports = dataStorageModule;