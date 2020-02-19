'use strict';

// Complete this algo
const minJumps = arr => {
  let jumpMap = { 0: 0 }; // Index => Steps
  // For each index in the array
  for (let i = 0; i < arr.length; i++) {
    // Get the element at that index
    let num = arr[i];
    // Iterate element # of times
    for (let j = i + 1; j < i + num + 1; j++) {
      // If you don't see the index in the cache
      if (!jumpMap[j]) {
        const next = jumpMap[i] + 1;

        // If we get to the end of the array, return the jump count at that index
        if (j === arr.length - 1) {
          return next;
        }

        // Otherwise add to cache
        jumpMap[j] = next;
      }
    }
  }
};

module.exports = minJumps;
