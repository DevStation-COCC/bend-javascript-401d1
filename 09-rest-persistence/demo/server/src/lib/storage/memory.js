'use strict';

const storage = module.exports = {};

const database = {};

storage.get = id => {

  return new Promise((resolve, reject) => {
    if(!database[id]) { reject(`${id} not found`); }
    resolve(database[id]);
  });
};

storage.save = data => {

  return new Promise((resolve, reject) => {
    if(data.id){
      database[data.id] = data;
      resolve(database[data.id]);
    }else{
      reject('ERROR: No id provided on data');
    }
  });

};