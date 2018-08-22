/*
  Here's a ridiculous example of recursion.
  This function adds 2 numbers by constantly calling itself with
  variations of the initial values until it's time to be done.

  Why?

  If you run the code and then put a break point on the return statement in the if block,
  its really interesting to see the call stack.

  This is a real world example of stacks, and it also gives some insight into the Big-O
  of recursion.  Here, we have a Time Complexity of O(b) (we loop based on "b") as well
  as a Space complexity of O(2b), because we're building up and not releasing new a and b
  variables on each iteration.
 */


function add(a,b) {
  if( b===1 ) {
    return a+b;
  }
  return add(a+1, b-1);
}

console.log(add(5,5));
