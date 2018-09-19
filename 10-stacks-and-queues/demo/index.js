'use strict';

const Stack = require('./StacksQueues/stack.js');
const Queue = require('./StacksQueues/queue.js');
const DoubleLinkedList = require('./LinkedList/doubleLinkedList.js');

// Below are a series of 'tests' that show output of the DLL as you interact with it.

// I put these here instead of in a test framework like Jest or Mocha so that you can play around with the DLL in a sandbox-type of environment.

// You also have access to my implementations of Stack/Queue using the JavaScript built-in Array for storage but NOT using Array.pop(), Array.push(), Array.shift(), Array.unshift()

let runAppendTest = () => {
  let dLL = new DoubleLinkedList();

  console.log('*** APPEND ***')
  for(let i = 0; i < 10; i++){
    dLL.append(i);
  }
  dLL.prettyPrint();
};

let runPrependTest = () => {
  let dLL = new DoubleLinkedList();

  console.log('*** PREPEND ***');
  for(let i = 0; i < 10; i++){
    dLL.prepend(i);
  }
  dLL.prettyPrint();
};

let runRemoveFromMiddleTest = () => {
  let dLL = new DoubleLinkedList();

  console.log('*** REMOVE MIDDLE ***');
  for(let i = 0; i < 10; i++){
    dLL.append(i);
  }
  dLL.prettyPrint();

  console.log('\nRemoving offset 5');
  dLL.remove(5);
  dLL.prettyPrint();
};

let runRemoveFromHeadTest = () => {
  let dLL = new DoubleLinkedList();

  console.log('*** REMOVE HEAD ***');
  console.log('\nAdding one value before remove...');
  dLL.append(1);
  console.log('\nBefore remove...');
  dLL.prettyPrint();

  dLL.remove(0);
  console.log('\nAfter remove...');
  dLL.prettyPrint();

  console.log('\nAdding two values before remove...');
  dLL.append(1);
  dLL.append(2);
  console.log('\nBefore remove...');
  dLL.prettyPrint();
  dLL.remove(0);
  console.log('\nAfter remove...');
  dLL.prettyPrint();
};
// runRemoveFromHeadTest();

let runRemoveFromTailTest = () => {
  let dLL = new DoubleLinkedList();

  console.log('*** REMOVE TAIL ***');
  console.log('\nAdding five values before remove...');
  for(let i = 0; i < 5; i++){
    dLL.append(i);
  }

  console.log('\nBefore remove...');
  dLL.prettyPrint();

  dLL.remove(4);
  console.log('\nAfter remove...');
  dLL.prettyPrint();
};

let runItemAtTest = () => {
  let dLL = new DoubleLinkedList();

  console.log('*** ITEM AT ***');
  console.log('\nAdding five values...');
  for(let i = 0; i < 5; i++){
    dLL.append(i);
  }
  dLL.prettyPrint();

  console.log('\nItem At 3...');
  console.log(dLL.itemAt(3).val);

};

let runAll = () => {
  runAppendTest();
  runPrependTest();
  runRemoveFromMiddleTest();
  runRemoveFromHeadTest();
  runRemoveFromTailTest();
  runItemAtTest();
};

// This will just run all tests but be warned, LOTS of console logging....
runAll();

// Uncomment any of the tests below to run a specific test
// runAppendTest();
// runPrependTest();
// runRemoveFromMiddleTest();
// runRemoveFromHeadTest();
// runRemoveFromTailTest();
// runItemAtTest();