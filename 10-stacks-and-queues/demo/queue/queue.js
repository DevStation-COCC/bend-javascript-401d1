'use strict';

class Queue {

  constructor() {
    this.storage = new Array();
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    return this.storage.shift();
  }

}

// let q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// q.enqueue(4);
//
// console.log(q);
// console.log(q.dequeue(), q);
// console.log(q.dequeue(), q);
// console.log(q.dequeue(), q);
// console.log(q.dequeue(), q);

module.exports = Queue;
