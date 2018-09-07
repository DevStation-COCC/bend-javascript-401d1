'use strict';

// This is how we need to create Buffers instead of using the deprecated "new Buffer('')"
let str = 'Happy!';
let data = Buffer.alloc(str.length, str);
console.log(data); // Prints the raw data in hex

console.log(data.toString()); // Converts raw data to it's String representation

console.log(data.toString('hex')); // The hex values but as a String

console.log(data[0]); // Ohhhhh, the first byte in Decimal!

data[1] = 111; // DINK!
console.log(data.toString()); // Happy! -> Hoppy!, neat!