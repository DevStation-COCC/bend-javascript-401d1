let success = console.log;
let fail = console.error;

// a "getName" function that RETURNS a promise, which resolves after 250ms
let getName = () => new Promise( (resolve, reject) => {
  setTimeout( ()=> {
    resolve('Johnny');
  }, 250);
});

// a "getName" function that just instantly resolves
// getName = () => Promise.resolve("John");

// a "getName" function that just instantly rejects
// getName = () => Promise.reject('Nobody here by that name');

// Uncomment any of those to see the results.
// Notice how the the then() blocks chain. Each "then" receives a value which is
// always going to be either what was resolved by the promise or what was
// returned by the previous "then()" (which could also be a promise, BTW_
getName()
  .then( name => name.toUpperCase() )
  .then( success )
  .catch( fail );
  
  
// Promise.reject(2)
//   .then(success)
//   .catch( (number) => number*2)
//   .then(success);


