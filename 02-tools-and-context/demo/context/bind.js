'use strict';

let myObject = {
  foo: function() {
    console.log('foo');
  },

  bar: function() {
    console.log('bar');
  },

  baz: function(fn) {
    fn.call();
  },

  runGoodly: function() {
    let newFunc = function() {
      this.bar();
      this.foo();
    };

    console.log(this);
    let newNewFunc = newFunc.bind(this);
    this.baz(newNewFunc);

  }
};


myObject.foo();
myObject.bar();
myObject.runGoodly();