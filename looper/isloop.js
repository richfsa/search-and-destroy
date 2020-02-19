'use strict';

//Complete this algo
const isLoop = linkedlist => {
  let memo = {};
  let node = linkedlist.head;
  while (!memo[node.value]) {
    if (node === linkedlist.tail) {
      return false;
    }
    memo[node.value] = node;
    node = node.next;
  }
  return true;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
