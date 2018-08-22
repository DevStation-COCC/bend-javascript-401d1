'use strict';

const Stack = require('../stack.js');

describe('Stack interface', () => {

  it("new() can implement the push-pop stack type", () => {
    let stack = new Stack('pushpop');
    expect(stack.stack.constructor.name).toEqual('StackPushPop');
  });

  it("new() can implement the shift-unshift stack type", () => {
    let stack = new Stack('shiftunshift');
    expect(stack.stack.constructor.name).toEqual('StackShiftUnshift');
  });

});
