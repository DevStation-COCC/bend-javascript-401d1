'use strict';

class Shape {
  constructor(height, length){
    this.height = height;
    this.length = length;
  }

  area() {
    return this.height * this.length;
  }
}

class Square extends Shape {
  constructor(height){
    super(height, height);
  }

  area(){
    return this.height*3;
  }
}

class myError extends Error {
  constructor(){
    super();
  }
}

module.exports = Square;