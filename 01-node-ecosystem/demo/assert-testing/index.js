const greeter = require('./lib/greeter');

console.log(greeter);

console.log(greeter.sayHello('Adam')); //expected: Hello Adam
console.log(greeter.sayGoodbye('Adam')); //expected: Goodbye Adam
console.log(greeter.rudeGoodbye('Adam')); //expected: Finally, I never thought Adam would leave