'use strict';

const Animal = {
  name = this.name,
  walk() {
    console.log('Walking...');
  }
};

const Dog = {
  run: function() {
    console.log('Running...');
  },
  speak() {
    console.log('WOOF');
  }
};

const Cat = {
  speak() {
    console.log('MEOW');
  }
};

const DogFactory = (name) => {
  let animal = Object.assign(Object.create(Animal), name);
  let dog = Object.assign(Object.create(Dog), animal);
  return dog;
};
const CatFactory = (name) => {
  let animal = Object.assign(Object.create(Animal), name);
  let cat = Object.assign(Object.create(Cat), animal);
  return cat;
};

module.exports = DogFactory;