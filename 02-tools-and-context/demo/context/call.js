'use strict';

let adam = {name:'Adam', age:31, isSick: true};

function sayHello(day) {
  console.log("some msg");
  return `${this.name} is ${this.age} years old on ${day}`;
}

// console.log(sayHello());

console.log(sayHello.call(adam, 'Thursday', 'not a day'));