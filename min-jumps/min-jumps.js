'use strict';

// Complete this algo
const minJumps = arr => {
  let jumpMap = { 0: 0 }; // Index => Steps
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    for (let j = i + 1; j < i + num + 1; j++) {
      if (!jumpMap[j]) {
        const newJump = jumpMap[i] + 1;

        if (j === arr.length - 1) {
          return newJump;
        }

        jumpMap[j] = newJump;
      }
    }
  }
};

module.exports = minJumps;
