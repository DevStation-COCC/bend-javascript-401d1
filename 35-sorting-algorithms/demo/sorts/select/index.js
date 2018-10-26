'use strict';

// EXAMPLE
// [42, 35, 17, 23, 5]
// [5, 35, 17, 23, 42]
// [5, 17, 35, 23, 42]
// [5, 17, 23, 35, 42]
// [5, 17, 23, 35, 42]
// DONE

let selectionSort = (array, compare) => {

  // Default to ascending order
  compare = compare ? compare : (a,b) => a < b;

  // Create outer loop
  // The left side of the wall is sorted
  // The right side of the wall is unsorted
  for(let wall = 0; wall < array.length; wall++){

    // Set our swap index to the "right" of the wall
    let swapIndex = wall;

    // Iterate over each element to the right of our swapIndex
    for(let j = swapIndex+1; j < array.length; j++){
      // If ever our swapIndex is greater than a value on the right
      // set the swapIndex to the index of the element that is small than it...
      if(!compare(array[swapIndex], array[j])) {
        swapIndex = j;
      }
    }

    // Make sure the swap actually needs to happen...
    if(swapIndex != wall){
      // ES6 swap
      // [a, b] = [b, a];
      [array[swapIndex], array[wall]] = [array[wall], array[swapIndex]];

      // ES5 swap
      // let tmp = array[wall];
      // array[wall] = array[swapIndex];
      // array[swapIndex] = tmp;
    }

  }

  // Return our in-place sorted array
  return array;
};

module.exports = selectionSort;
