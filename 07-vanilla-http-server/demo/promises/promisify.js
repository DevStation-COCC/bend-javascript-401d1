let message = 'Hello Promises';

// makeExiciting is a function that takes an error first callback
let makeExciting = (message, cb) => {
  message = message + '!!!'; //Do some work
  cb(null, message);
};

// Invoke function with error-first callback
// makeExciting(message, (err, data) => {
//   if(err) throw err;

//   console.log(data);
// });


// We can turn ANY callback function into a promise
// NOTE: promisify returns a FUNCTION, and the return of that function is a PROMISE
let promisify = (fn) => {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, data) => {
        if(err) reject(err);
        else { resolve(data); }
      })
    })
  }
}

let someNewPromiseFunction = promisify(makeExciting);

someNewPromiseFunction('foo')
  .then(data => console.log(`DATA: ${data}`))
  .catch(err => console.error(`ERR: ${err}`));