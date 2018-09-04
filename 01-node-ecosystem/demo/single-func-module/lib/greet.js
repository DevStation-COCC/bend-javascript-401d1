/*
reference: https://nodejs.org/api/modules.html#modules_the_module_wrapper

Node provides module.exports and exports to use when developing a module (see reference). There is a subtle difference between the two, but at the end of the day we want the to reference the same object/function.

Here, we are assigning a function to each. Now if we use the require function in a different file, and pass the path to this file as a paramter, then what is returned is our function.

*/
module.exports = exports = (name) => {
  return `Hello ${name}`;
};
