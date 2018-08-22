'use strict';

class StackPushPop {

  constructor() {
    this.storage = new Array();
  }

  push(item)  {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }
}

module.exports = StackPushPop;

