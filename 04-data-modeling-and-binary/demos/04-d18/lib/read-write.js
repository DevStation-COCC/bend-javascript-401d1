'use strict'

const fs = require('fs')
const Bitmap = require('./bitmap')
const transforms = require('./transform')

const rw = module.exports = {}

rw.readBmp = (bmpPath, transform, cb) => {
  if(!bmpPath) cb(new Error('must provide valid bmpPath argument'))
  
  fs.readFile(`${__dirname}/../assets/${bmpPath}`, (err, bmpData) => {
    if(err) cb(err)

    let bmp = new Bitmap(bmpData)
    transforms[transform](bmp, cb)
  })
}
  
rw.writeBmp = (bmpPath, data, cb) => {
  if(!bmpPath) cb(new Error('must provide valid bmpPath argument'))
  
  fs.writeFile(`${__dirname}/../assets/${bmpPath}`, data, (err, output) => {
    if(err) cb(err)
    
    cb(output)
  })
}