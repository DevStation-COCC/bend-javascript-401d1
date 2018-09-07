'use strict';

let str = 'Happy!';
let data = Buffer.alloc(str.length, str);
console.log(data);

console.log(data.toString());

console.log(data.toString('hex'));

console.log(data[0]);

data[1] = 111;
console.log(data.toString());