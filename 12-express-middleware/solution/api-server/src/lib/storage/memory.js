'use strict';


const storage = {};

const database = {};

storage.getAll = () => {
  return Promise.resolve(database);
};

storage.get = (id) => {
  return new Promise( (resolve,reject) => {
    if ( database[id] ) { resolve(database[id]); }
    else { reject(`${id} not found`); }
  });
};

storage.save = (data) => {
  return new Promise( (resolve,reject) => {
    if ( data.id ) {
      database[data.id] = data;
      resolve(database[data.id]);
    }
    else {
      reject('Invalid Data (No ID)');
    }
  });
};

export default storage;
