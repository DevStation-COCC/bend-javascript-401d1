'use strict';

const printFiles = require('./lib/print-files.js');

let main = module.exports = (paths, callback) => {
  printFiles(paths, (err, data) => {
    if(err){
      console.log('you failed');
      if(callback) callback(err)
      return;
    }

    let result = data.join('\n');
    console.log(result);
    if (callback) callback(null, result);
  });
}

main(process.argv.slice(2))
