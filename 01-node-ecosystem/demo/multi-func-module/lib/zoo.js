module.exports = exports = {};

let metaData = {
  numberOfAnimals: 3,
  name: 'Fun happy time zoo',
};

let name = {
  first: 'Adam',
  last: 'DuQuette'
};

exports.setFirstName = (firstName) => {
  name.first = firstName;
}

exports.getFullName = () => {
  return `${name.first} ${name.last}`;
}

exports.getNameOfZoo = () => {
  return metaData.name;
}

exports.lion = () => {
  return 'ROAR';
};

exports.gorilla = () => {
  return 'SMASH!!!';
};

exports.penguin = () => {
  return 'waddlewaddle';
};