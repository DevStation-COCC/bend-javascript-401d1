'use strict';

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

// useTheCallback(myCallback);


let errorFirstCallback = (err, data) => {
  if(err) {throw err;}

  console.log('2: Received', data);
};

let useErrorCallback = (num, cb) => {
  if(num%2 === 0){
    cb('An error has been encountered', null);
  }else{
    let text = 'Some more random text ' + num;
    console.log('1: Calling the error first callback');
    cb(null, text);
  }
};

// useErrorCallback(1, errorFirstCallback); //expected: Some more random text 1
// useErrorCallback(2, errorFirstCallback); //expected: An error has been encountered

let asyncCallback = (err, data) => {
  if(err) { throw err; }

  setTimeout(() => {
    console.log('2: Received', data);
  }, 2000);

  setTimeout(() => {
    console.log('2: Received part duex', data);
  }, 0);
};

let useAsyncCallback = (num, cb) => {
  if(num%2 === 0){
    cb(new Error('An error was encountered'), null);
  }else{
    let text = 'more random text', num;
    console.log('1: Gettin ready to call the async callback');
    cb(null, text);
    console.log('3: After the async call');
  }
};

useAsyncCallback(1, asyncCallback);  // 1, 3, 2
try{
  useAsyncCallback(2, asyncCallback);  // error
}catch(e){
  console.error('Uh oh', e);
}