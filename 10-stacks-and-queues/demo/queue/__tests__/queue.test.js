'use strict';

let Queue = require('../queue.js');

describe('Queue', () => {

  it('implements first in first out (FIFO) functionality', () => {

    let q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);

    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(4);

  });

})
