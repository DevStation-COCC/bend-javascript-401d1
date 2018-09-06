'use strict';

let person = {
  firstName: 'Adam',
  hair: {
    eyeBrows: {
      color: 'Blond'
    }
  }
};

// let color = person.hair.head.color;
// console.log(color);

let thing = {};
try {
  thing = person.hair.eyeBrows.color;

  let newErr = new Error('Uh oh something went wrong!');
  throw newErr;

}catch(err) {
  console.error(err);
  console.error('error encountered while accessing the head color of adam');
}

console.log(thing);