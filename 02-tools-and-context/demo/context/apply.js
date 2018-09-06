'use strict';

let adam = {name:'Adam', age:31, isSick: true};

function sayHello(month, day) {
  console.log("some msg");
  return `${this.name} is ${this.age} years old on ${day}`;
}

// console.log(sayHello());

let data = ['Sept.', 'Thursday'];

console.log(sayHello.apply(adam, data));