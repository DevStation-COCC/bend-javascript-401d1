'use strict';

const storage = {};

const database = {};

storage.save = (data) => {
  return new Promise((resolve, reject) => {
    if(database[id]) { resolve(database[id]);}
    else { reject(`${id} not found`);}
  });
};

export default storage;