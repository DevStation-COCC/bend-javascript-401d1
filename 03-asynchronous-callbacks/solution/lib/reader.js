'use strict';

const fs = require('fs');
let contents = [];
/**
 * Our module exports a single function that expects an array of files
 * @type {function(*=)}
 */
module.exports = exports = (files, callback) => {
  readAll(files,callback);
  contents = [];
};


/**
 * An error first callback and the primary handler for this module
 * It's job is simply to push the returned data into an array of contents
 * @param err
 * @param data
 */
let handler = (err,data) => {
  if(err) { throw err; }
  contents.push( data.toString().trim() );
};

/**
 * This wraps the fs module, primarily so that we can more easily write tests around it.
 * @param file
 * @param callback
 */
let readOne = (file, callback) => {
  fs.readFile( file, (err, data) => {
    if(err) { callback(err); }
    else { callback(undefined, data); }
  });
};

/**
 * Recursively go through the array of file paths and land on the
 * main callback (handler) with any returned data from readOne
 * @param paths
 * @param callback
 */
let readAll = (paths, callback) => {
  let path = paths.shift();
  path && readOne(path, (err, data) => {
    if (err) { return handler(err); }
    handler(undefined, data);
    if(paths.length) {
      readAll(paths,callback);
    }
    else {
      callback(null,contents);
    }
  });
};


/**
 * Typical Student Solution
 * Nested callbacks (ugly, but does guarantee order)
 *
  let contents = [];
  readOne(`${__dirname}/../data/file1.txt`, (err,data) => {
    if (err) { throw err; }
    else {
      contents.push(data.toString().trim());
      readOne(`${__dirname}/../data/file3.txt`, (err,data) => {
        if(err) { throw err; }
        else {
          contents.push(data.toString().trim());
          readOne(`${__dirname}/../data/file3.txt`, (err,data) => {
            if(err) { throw err; }
            else {
              contents.push(data.toString().trim()) ;
              console.log(contents);
            }
          });
        }
      });
    }
  });
 */
