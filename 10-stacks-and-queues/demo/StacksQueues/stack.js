'use strict';

class Stack {
  constructor(){
    this.length = 0;
    this.storage = [];
  }

  push(item){
    this.storage[this.length++] = item;
  }

  pop(){
    if(this.length === 0) return;

    let result = this.storage[this.length - 1];
    this.storage = this.storage.slice(0, --this.length);
    return result;
  }

  peek(){
    return this.storage[this.length - 1];
  }

  /* Quality Of Life */
  isEmpty(){
    return this.length === 0;
  }

  flush(){
    while(this.length){
      this.pop();
    }
  }

}

module.exports = Stack;