'use strict';

let mergeSort = (items, compare) => {

  // Make sure we have a compare function, default to ascending
  compare = compare ? compare : (a,b) => a < b;

  // Guard for recursion
  // Once each element is in it's own array, start returning
  if(items.length < 2) return items;

  // Find middle of the array
  let middle = Math.floor(items.length / 2);

  // Split array into a left and a right array
  let left = items.slice(0, middle);
  let right = items.slice(middle);

  // Merge the left array and right array given a compare function
  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
};

let merge = (left, right, compare) => {
  // console.log('left', left, 'right', right);
  let result = [];

  // If our left or right array still have values...
  while(left.length || right.length){

    // If the left array is empty but the right array has content...
    if(!left.length){
      // Push the rest of the right array into our result array
      result.push(right.shift());
      continue;
    }

    // Same as above but if the left array has content but right is empty...
    if(!right.length){
      result.push(left.shift());
      continue;
    }

    // If both left and right array have content, compare the smallest values of each array
    if(compare(left[0], right[0])){
      // If the left was smallest, push that into our result array
      result.push(left.shift());
    }else{
      // If the right was smallest, push that into our result array
      result.push(right.shift());
    }
  }

  // Return the results
  return result;
};

module.exports = mergeSort;