let Dog = require('./lib/class');
let Square = require('./lib/shape');

let ellie = new Dog('Ellie', 4);
console.log(ellie);
ellie.run();
ellie.dig();

let square = new Square(5);
console.log(square.area());