'use strict';

let pushpop = require('./stack-push-pop.js');
let shiftunshift = require('./stack-shift-unshift.js');

class Stack {
  constructor(type) {
    let implementation = shiftunshift;
    switch(type) {
    case 'pushpop':
      implementation = pushpop;
      this.stack = new implementation();
      break;
    case 'shiftunshift':
      implementation = shiftunshift;
      this.stack = new implementation();
      break;
    default:
      this.stack = new implementation();
      break;
    }
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    return this.stack.pop();
  }
}

// let s = new Stack('pushpop');
// s.push(1);
// s.push(2);
// s.push(3);
// s.push(4);
//
// console.log(s);
// console.log(s.pop(), s);
// console.log(s.pop(), s);
// console.log(s.pop(), s);
// console.log(s.pop(), s);

module.exports = Stack;
