'use strict';

const fs = require('fs');
// goal of this function is to reject an error if anything goes wrong
// or reslove an array of content from the three files (in order)
//
const expectedFilePathCount = 3;

module.exports = (paths, callback) => {
  if(!Array.isArray(paths)) 
    return callback(new Error('paths must be an array'));

  if(paths.length != expectedFilePathCount)
    return callback(new Error('printFiles expects three paths'));

  let result = [];
  // read the first file in 
  fs.readFile(paths[0], (err, data) => {
    // if an error occurs we stop run the printFiles and reject the error
    if(err) return callback(err);

    // accumulate the content of the first file into result
    result.push(data.toString());
    
    // read the second file
    fs.readFile(paths[1], (err, data) => {
      // if an error occurs we stop run the printFiles and reject the error
      if(err) return callback(err);

      // accumulate the content of the second file into result
      result.push(data.toString());

      fs.readFile(paths[2], (err, data) => {
        // if an error occurs we stop run the printFiles and reject the error
        if(err) return callback(err);

        // accumulate the content of the third file into result
        result.push(data.toString());
        callback(null, result);
      });
    });
  });

};









