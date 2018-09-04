/*
reference: https://nodejs.org/api/modules.html#modules_the_module_wrapper

In this example we set our export variables to be an empty object right away. Now, we can use the exports variable to reference that object and add functions and/or other variables to it. When we require this module what is returned is the object, and we can use normal dot-notation to access the functions and/or other variables.

If we declare a function or variable on the global scope (within this module) and do not add it to exports then it will be considered "private" and hidden away from whatever user is using our module.

*/
module.exports = exports = {};

// Declared at global scope, will not be accessible outside of this file
let metaData = {
  numberOfAnimals: 3,
  name: 'Fun happy time zoo',
};

// Declared at global scope, will not be accessible outside of this file
let name = {
  first: 'Adam',
  last: 'DuQuette'
};

// A setter function to allow a user to update one of our private variables.
exports.setFirstName = (firstName) => {
  name.first = firstName;
}

// A getter function to allow a user to read one of our private variables.
exports.getFullName = () => {
  return `${name.first} ${name.last}`;
};

exports.getNameOfZoo = () => {
  return metaData.name;
};

// These functions will be attached to the object returned from a require call to this module.
exports.lion = () => {
  return 'ROAR';
};

exports.gorilla = () => {
  return 'SMASH!!!';
};

exports.penguin = () => {
  return 'waddlewaddle';
};