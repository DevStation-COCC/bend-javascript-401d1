let success = console.log;
let fail = console.error;

getNameFromDatabase = () => Promise.resolve('Adam');

// getNameFromDatabase()
//   .then(name => name.toUpperCase())
//   .catch(fail)
//   .then(success);

getNameFromDatabase2 = () => {
  return new Promise((resolve, reject) => {
    // Arbitrary async process...
    setTimeout(() => {
      let someCondition = true;
      // Do something...
      if(someCondition){
        resolve('Ellie');
      }else{
        reject('Unable to get name');
      }
    }, 500);
  });
}

// getNameFromDatabase2()
//   .then(name => name.toUpperCase())
//   .then(success)
//   .catch(fail);

getNameFromDatabase3 = () => Promise.reject('Unable to get name as requested');

// getNameFromDatabase3()
//   .then(success)
//   .catch(fail)
//   .finally(() => console.log('getNameFromDatabase3 finally finished.'));


let promises = [getNameFromDatabase2(), getNameFromDatabase2()];

Promise.race(promises)
  .then((data1) => {
    console.log('all has finished');
    console.log(data1);
  })
  .catch(fail);