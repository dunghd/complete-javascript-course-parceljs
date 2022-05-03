"use strict";

// function findSum(numbers, queries) {
//   // Write your code here
//   const arrReturned = [];

//   for (let i = 0; i < queries.length; i++) {
//     const startIdx = queries[i][0] - 1; // Index in queries is 1
//     const endIdx = queries[i][1];
//     const zeroReplace = queries[i][2];

//     const numbersToSum = numbers.slice(startIdx, endIdx);

//     arrReturned.push(
//       numbersToSum.reduce((acc, curr) => {
//         return curr === 0 ? zeroReplace + acc : curr + acc;
//       }, 0)
//     );
//   }

//   return arrReturned;
// }

function findSum(numbers, queries) {
  // Write your code here
  const arrReturned = [];

  for (let i = 0; i < queries.length; i++) {
    const startIdx = queries[i][0] - 1; // Index in queries is 1
    const endIdx = queries[i][1];
    const zeroReplace = queries[i][2];

    let sum = 0;

    for (let j = startIdx; j < endIdx; j++) {
      if (numbers[j] === 0) {
        sum += zeroReplace;
      } else {
        sum += numbers[j];
      }
    }

    arrReturned.push(sum);
  }

  return arrReturned;
}

// // Complete the minimumSwaps function below.
// function findSum(numbers, queries) {
//   // Write your code here
//   const arrReturned = [];

//   let startIdx = 0;
//   let endIdx = 0;

//   for (let i = 0; i < queries.length; i++) {

//     const zeroReplace = queries[i][2];

//     let sum = 0;

//     if (i === 0) {
//       for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
//         if (numbers[j] === 0) {
//           sum += zeroReplace;
//         } else {
//           sum += numbers[j];
//         }
//       }
//     } else {

//       const startSubIdx = Math.abs(startIdx - (queries[i][0] - 1));

//       for (let j = 0; j < array.length; j++) {
//         const element = array[j];
//         for
//       }
//     }

//     startIdx = queries[i][0] - 1; // Index in queries is 1
//     endIdx = queries[i][1];

//     arrReturned.push(sum);
//   }

//   return arrReturned;
// }

/*

For each queries i => queries.length:
- Query i: Sum elements from queries[i][0] to queries[i][1]
-- for j from numbers[queries[i][0]] to numbers[queries[i][1]]
-- store number of zero element
-- Sum + (number-of-zero-element * queries[i][2])

*/

const queries = new Array(1)
  .fill(1)
  .map(() => new Array(3).fill(1, 0, 1).fill(3, 1, 2).fill(10, 2, 3));

console.log(findSum([20, 30, 0, 10], queries));
