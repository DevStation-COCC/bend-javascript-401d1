'use strict';

let Stack = require('./stack/stack.js');
let Queue = require('./queue/queue.js');

let stack = new Stack();
let queue = new Queue();

for(let i=1; i<=20; i++) {
  stack.push( `Command ${i}` );
}

let processStack = () => {
  let command = stack.pop();
  let queuedCommands = 0;
  while( command ){
    let async = Math.round(Math.random());
    if ( async ) {
      queuedCommands++;
      queue.enqueue(command);
    }
    else {
      console.log('Running Command', command);
    }
    command = stack.pop();
  }

  if( queuedCommands ) { processQueue(); }

};

let processQueue = () => {
  let command = queue.dequeue();
  while( command ){
    stack.push(`[Async] ${command}`);
    command = queue.dequeue();
  }

  processStack();
};

processStack();

