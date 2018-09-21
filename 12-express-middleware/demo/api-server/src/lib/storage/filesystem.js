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

// Go through this funciton line by line and make sure you know exactly what one line is doing before moving to the next!
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
