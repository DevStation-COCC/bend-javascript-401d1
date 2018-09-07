'use strict';

// A callback NOT using error-first
let myCallback = (data) => {
  //Do work with data...
  console.log('2: Received', data);
};

let useTheCallback = (cb) => {
  let text = 'Some random text';
  console.log('1: Calling the callback');
  cb(text);
  console.log('3: After the callback');
};

// Uncomment to see in action
// useTheCallback(myCallback);


// An error-first callback! The first parameter we will ALWAYS reserve for an err (if one is encountered), while the second parameter is reserved for the data/result of the calling function.
let errorFirstCallback = (err, data) => {
  // We need to always check for an error before taking any actions.
  if(err) {throw err;}

  // Do some work...it just so happens the work we are doing is printing to the terminal. We could have just as easily stored the data in a database, created a file with the data, manipulated/changed the data, etc.
  console.log('2: Received', data);
};

let useErrorCallback = (num, cb) => {
  // An arbitrary error-inducing check, simply placed here so we can see what happens when we pass an error to our callback
  if(num%2 === 0){
    cb('An error has been encountered', null);
  }else{
    let text = 'Some more random text ' + num;
    console.log('1: Calling the error first callback');
    
    // Make sure the first parameter is null! Otherwise the callback will think an error was encountered and throw an error
    cb(null, text);
  }
};

// Uncomment one at a time, or both to see different results
// useErrorCallback(1, errorFirstCallback); //expected: Some more random text 1
// useErrorCallback(2, errorFirstCallback); //expected: An error has been encountered


// Ok, but can you do it asynchronously?
let asyncCallback = (err, data) => {
  if(err) { throw err; }

  // Which console.log will run first? Why?
  setTimeout(() => {
    console.log('2: Received', data);
  }, 2000);

  setTimeout(() => {
    console.log('2: Received part duex', data);
  }, 0);
};

let useAsyncCallback = (num, cb) => {
  if(num%2 === 0){
    // Notice: We can use the built-in Error class provided by Node. We could also extend the Error class to make our own Error class specific to the module
    cb(new Error('An error was encountered'), null);
  }else{
    let text = 'more random text', num;
    console.log('1: Gettin ready to call the async callback');
    cb(null, text);
    console.log('3: After the async call');
  }
};

try{
  useAsyncCallback(1, asyncCallback); // Will run sucessfully
  useAsyncCallback(2, asyncCallback); // Will throw an error
}catch(e){
  console.error('Uh oh', e);
}