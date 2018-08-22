'use strict';


const storage = {};

// We create a simple object to store our notes in memory
const database = {};

// This use a straight "Promise.resolve"
// When you do this, you don't have to do the whole promise wiring.
// Rather, JS just returns a promise and immediately resolves it for you
storage.getAll = () => {
  return Promise.resolve(database);
};

// To get a single note, check for it in the database, and resolve with it
storage.get = (id) => {
  return new Promise( (resolve,reject) => {
    if ( database[id] ) { resolve(database[id]); }
    else { reject(`${id} not found`); }
  });
};

// For saving, we just add the data into the "database", keyed by the note's id.
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
