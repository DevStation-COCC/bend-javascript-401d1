'use strict';

let fs = require('fs');

// Remember: Node wraps all of our modules and provides several different variable we can use!
let file = `${__dirname}/data.txt`;

// A Synchronous call to read a file on our file system
let data = fs.readFileSync(file);
console.log(data); // It's a Buffer!

// To perform an Async file read we need to create an error-first callback
let getFileAsyncCallback = (err, data) => {
  if(err) {throw err;}
  //Do some kind of work...can be anything. Just so happens we are printing the data as JSON
  console.log(data.toJSON());
};

// Since we are using an error-first callback which throws an error, we need to wrap our function in a try/catch block so we can properly handle the error in the catch
try{
  // Guaranteed to print first
  console.log('About to read file!');
  fs.readFile(file, getFileAsyncCallback);
  // Guaranteed to print second before the console.log in the callback executes.
  console.log('Reading file...hopefully it comes back soon.');

  // Remember, a callback is not placed onto the Call Stack until it is emptied
}catch(e){
  console.error(e);
}
