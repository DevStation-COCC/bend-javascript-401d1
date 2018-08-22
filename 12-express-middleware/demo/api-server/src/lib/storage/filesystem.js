'use strict';
import fs from 'fs';

const debug = require('debug')('storage');

const storage = {};

// The location where we will store our individual model data files
const dataDirectory = `${__dirname}/../../../data`;

// Promisify the fs.readFile() method.
let readFilePromise = function(filename) {
  debug(`readFilePromise ${filename}`);
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, function(err, data){
      if (err)
        reject(err);
      else
        resolve(data);
    });
  });
};

// Read all of the files in a directory and collate them.  Do this, we want
// to put them into an array, put the "readFile()" calls into an array
// of promises, and then do a promise.all() on all of them, which runs
// when they are all completed.
storage.getAll = () => {
  debug('getting all');
  return new Promise( (resolve,reject) => {
    // First, get all of the files in our data directory, if there are any
    fs.readdir(dataDirectory, (err,files) => {
      if(err) { reject(err); }
      let promises = [];
      // Loop through the files and push calls to "readFilePromise" into an array of promises
      while(files.length) {
        let file = files.shift();
        file = `${dataDirectory}/${file}`;
        if ( file.match(/\.json/) ) { promises.push( readFilePromise(file) ); }
      }
      // Assuming we have some promises in that array above, this code
      // will execute when they are all done. "contents" in the then
      // be an array, with each entry in it being the "resolved" data from
      // each of the promises in the array. Totally cool!
      Promise.all(promises)
        .then(contents => {
          let database = contents.reduce( (db,data) => {
            let obj = JSON.parse(data.toString());
            db[obj.id] = obj;
            return db;
          },{});
          resolve(database);
        })
        .catch(console.log);
    });
  });
};

// Pick one of the files from our data folder, if it's id is valid (file is there)
storage.get = (id) => {
  debug(`getting ${id}`);
  return new Promise( (resolve,reject) => {
    let file = `${dataDirectory}/${id}.json`;
    fs.readFile(file, (err,data) => {
      if ( data ) {
        let obj = JSON.parse(data.toString());
        resolve(obj);
      }
      else { reject(`${id} not found`); }
    });
  });
};

// Create a new data file with our model object.
// Note that this does absolutely no error checking
// other than requiring an .id property.  The model
// itself should have done all of that ahead of time
// so that this is called with a fully baked record
storage.save = (data) => {
  debug(`saving ${JSON.stringify(data)}`);
  return new Promise( (resolve,reject) => {
    if ( ! data.id ) { reject('No Record ID Specified'); }

    let file = `${dataDirectory}/${data.id}.json`;
    let text = JSON.stringify(data);
    fs.writeFile( file, text, (err) => {
      if(err) { reject(err); }
      resolve(data);
    });
  });
};


export default storage;
