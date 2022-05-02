"use strict";

function minimumBribes(q) {
  // Write your code here
  let nbBribe = 0;
  let personBribed = {};
  let tooChaotic = false;

  for (let i = q.length - 1; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i; j++) {
      if (q[j] > q[j + 1]) {
        personBribed[q[j]] = (personBribed[q[j]] || 0) + 1;

        if (personBribed[q[j]] > 2) {
          tooChaotic = true;
          console.log(`Too chaotic`);
          break;
        }

        nbBribe++;
        [q[j], q[j + 1]] = [q[j + 1], q[j]];
        noSwaps = false;
      }
    }

    if (tooChaotic || noSwaps) {
      break;
    }
  }

  if (!tooChaotic) {
    console.log(nbBribe);
  }
}

/*
  Similar Bubble sort?

  [2, 5, 1, 3, 4]

   i =>  

  i = 0: 2 < 5 ? true i++
  i = 1: 5 < 1 ? false => replace(5, 1) i++

  [2, 1, 5, 3, 4] => 3
  [2, 5, 1, 3, 4] => Too chaotic
  5 > 1 swap
  5 > 3 swap
  5 > 4 swap

*/

// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]));
// console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]));
// console.log(minimumBribes([2, 1, 5, 3, 4]));
console.log(minimumBribes([2, 5, 1, 3, 4]));
