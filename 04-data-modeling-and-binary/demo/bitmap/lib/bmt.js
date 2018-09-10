'use strict';

const fs = require('fs');

class BMT {
  constructor(){
    this.buf = null;
    this.fileHeaderBuf = null; // Raw header
    this.infoHeaderBuf = null;
    this.fileHeader = null;
    this.infoHeader = null;
  }

  /* Async File System Methods */
  open(file, callback){
    fs.readFile(file, (err, data) => {
      if(err) callback(err, null);
      this.buf = data;

      _parseBitmapBuffer(this);

      callback(null, this);
    });
  }

  save(bitmap, outputFile, callback){
    // Write transformed bitmap to disk
    // NOTE: transformed colors might still be encoded, they need to be raw
    // NOTE: bitmap is NOT a Buffer, but fs.writeFile takes a Buffer
    callback(null);
  }

  /* Color Transform Methods */
  transform(bitmap, transform, callback){
    console.log('inverting colors...');
    // Transform the colors
    console.log('colors inverted!');
    callback(null, bitmap);
  }
}

let _parseBitmapBuffer = function(self) {
  self.fileHeaderBuf = self.buf.slice(0, 14);
  self.fileHeader = {
    fileType: self.fileHeaderBuf.toString('ascii', 0, 2),
    fileSize: self.fileHeaderBuf.readUInt32LE(2),
    reserved: self.fileHeaderBuf.readUInt32LE(6),
    dataOffset: self.fileHeaderBuf.readUInt32LE(10)
  };

  self.infoHeaderBuf = self.buf.slice(14, 54);
  self.infoHeader = {
    infoHeaderSize: self.infoHeaderBuf.readUInt32LE(0),
    pixelWidth: self.infoHeaderBuf.readUInt32LE(4),
    pixelHeight: self.infoHeaderBuf.readUInt32LE(8),
    planes: self.infoHeaderBuf.readUInt16LE(12),
    bitPerPixel: self.infoHeaderBuf.readUInt16LE(14)
  };
};

module.exports = exports = BMT;