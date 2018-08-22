'use strict'

const fs = require('fs')
const rw = require('./lib/read-write')

let args = process.argv.slice(2)
let transform

switch (args[1]) {
  case 'grayscale':
    transform = 'grayScale'
    break
  
  case 'invert':
    transform = 'invert'
    break

  default:
    transform = 'grayScale'
    break
}

rw.readBmp(args[0], transform, (err, data) => {
  if(err) console.error(err)
  rw.writeBmp(`${transform.toLowerCase()}.bmp`, data.all, (err, out) => {
    if(err) console.error(err)
    console.log(out)
  })
})