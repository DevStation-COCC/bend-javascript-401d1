'use strict';

class Queue {
  constructor(){
    this.length = 0;
    this.storage = [];
  }

  enqueue(item){
    for(let i = this.length; i > 0; i--){
      this.storage[i] = this.storage[i-1];
    }

    this.storage[0] = item;
    this.length++;
  }

  dequeue() {
    if(this.length === 0) return;

    let result = this.storage[this.length - 1];
    this.storage = this.storage.slice(0, --this.length);
    return result;
  }

  peek(){
    return this.storage[this.length - 1];
  }

}

module.exports = Queue;