const bitmapManipulator = require('./lib/bitmap_manipulator');

// make sure there's enough arguments provided.
if (process.argv.length < 5) {
  console.log("Too few arguments. Requires:");
  console.log("input-file-path  output-file-path  transfrom-name");
  return;
}

const inFile = process.argv[2];
const outFile = process.argv[3];
const transform = process.argv[4];

let message = `using ${transform} on ${inFile} to create ${outFile}`;
console.log(message);

// check to see if the transformation exists
const transformFunc = bitmapManipulator[transform];
if (transformFunc) {
  // perform the transformation
  bitmapManipulator[transform](inFile, outFile);
} else {
  console.log(`Transformation: "${transform}" not found.`);
  console.log("Available transformations:");
  for (var key in bitmapManipulator) {
    console.log("  " + key);
  }
}
