'use strict';

const selectSort = require('./sorts/select');
const mergeSort = require('./sorts/merge');

let array = [42, 35, 17, 23, 5];

let people = [
  {
    name: 'Sharon',
  },
  {
    name: 'Connor',
  },
  {
    name: 'Alex',
  },
  {
    name: 'Tim',
  },
  {
    name: 'Zz'
  }
];

let comparePeopleObjects = (a, b) => a.name > b.name;

// (Un)comment RESULT console.logs to see the sorting in action!
console.log('ORIGINAL: ', array);
console.log('RESULT    ', mergeSort(people, comparePeopleObjects));
// console.log('RESULT:   ', mergeSort(array));
// console.log('RESULT:   ', selectSort(array));
// console.log('RESULT:   ', selectSort(array, (a,b) => a > b));