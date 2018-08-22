const fs = require('fs');

module.exports = transforms = {};

function handleFileError(err) {
  if (err) {
    console.log(err.message);
    process.exit();
  }
}

function readFile(filepath, cb) {
  fs.readFile(filepath, (err, buffer) => {
    handleFileError(err);

    cb(buffer);
  });
}

function writeFile(filepath, buffer) {
  fs.writeFile(filepath, buffer, (err) => {
    handleFileError(err);
  });
}

transforms.invert = (inFile, outFile) => {
  readFile(inFile, (buffer) => {
    invertBuffer(buffer);
    writeFile(outFile, buffer);
  });

  function invertBuffer(buffer) {
    console.log("buffer length:", buffer.length);
    for (let i = 0; i < buffer.length; i++) {
      if (i > 1000) {
        buffer[i] = ~buffer[i];
      }
    }
  }
};
