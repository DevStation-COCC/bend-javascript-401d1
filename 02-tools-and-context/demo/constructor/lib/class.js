'use strict';

class Animal {
  constructor(name){
    this.name = name;
  }

  walk() {
    console.log('Walking...');
  }
}

class Dog extends Animal {
  constructor(name, age){
    super(name);
    this.age = age*7;
  }

  speak() {
    console.log('Woof!');
  }

  run() {
    super.walk();
  }

  dig() {
    console.log('Digging, bad dog!');
  }
}

module.exports = Dog;