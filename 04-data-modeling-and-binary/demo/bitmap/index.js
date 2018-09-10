'use strict';

/* CLI */
// Get args from command line
let args = process.argv;

// Make sure used properly, error if not
if(args.length < 5){
  throw new Error('--ERROR--\nusage: node index.js <input-file> <output-file> <transform-name>');
}

let inputFile = args[2]; // First passed argument by user
let outputFile = args[3];
let transform = args[4];

let message = `Using ${transform} on ${inputFile} and saving to ${outputFile}.`;
console.log(message);




/* WORKER */
const Event = require('events').EventEmitter;
const ee = new Event();

const BMT = require('./lib/bmt.js');
let bmt = new BMT();

bmt.open(inputFile, (err, bitmap) => {
  if(err) throw err;

  ee.emit('fileLoaded', bitmap);
});

ee.on('fileLoaded', (bitmap) => {
  console.log(bitmap);
  bmt.transform(bitmap, transform, (err, bitmap) => {
    if(err) throw err;

    ee.emit('transformed', bitmap);
  });
});

ee.on('transformed', (bitmap) => {
  bmt.save(bitmap, outputFile, (err, data) => {
    if(err) throw err;
    console.log('File transformed and saved successfully!');
  });
});