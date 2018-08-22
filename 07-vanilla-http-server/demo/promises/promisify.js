// someFunction is a function that takes an error first callback
let someFunction = function(word, cb) {
  cb(null, word);
};

// Here, we call it and send in the e/f callback
someFunction('foo', (err, data) => {
  if(err) { console.log('ERR', err); }
  else { console.log('OK', data); }
});


// We can turn ANY callback function into a promise
let promisify = (fn) => (...args) => {
  return new Promise( (resolve, reject) => {
    fn(...args, (err, data) => {
      if ( err ) { reject(err); }
      else { resolve(data); }
    });
  });
};

// turn "someFunction" into one that returns a promise when called
let someNewFunction = promisify(someFunction);

// now, we can use the hot new syntax!
someNewFunction('foo')
  .then(data => console.log('DATA', data))
  .catch(err=>console.log('ERR', err));
  
  