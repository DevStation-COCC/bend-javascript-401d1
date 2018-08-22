'use strict';

const Animal = {
  name: this.name,
  walk () {
    console.log('Walking ...');
  },
};

const Dog = {
  speak() {
    console.log('WOOF!');
  },
};

const DogFactory = (name) => {
  let dog = Object.assign( Object.create(Dog), {name} );
  return dog;
};

module.exports = DogFactory;
