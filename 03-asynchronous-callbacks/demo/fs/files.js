'use strict';

let fs = require('fs');

let file = `${__dirname}/data.txt`;

let data = fs.readFileSync(file);
console.log(data);

let getFileAsyncCallback = (err, data) => {
  if(err) {throw err;}
  //Do some kind of work...
  console.log(data.toJSON());
};

try{
  console.log('About to read file!');
  fs.readFile(file, getFileAsyncCallback);
  console.log('Reading file...hopefully it comes back soon.');
}catch(e){
  console.error(e);
}
