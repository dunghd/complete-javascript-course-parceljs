"use strict";

function hourglassSum(arr) {
  // Write your code here
  const length = arr.length;
  const hourglassWindows = [];

  for (let row = 0; row < length - 2; row++) {
    for (let column = 0; column < length - 2; column++) {
      hourglassWindows.push([
        arr[row][column],
        arr[row][column + 1],
        arr[row][column + 2],
        arr[row + 1][column + 1],
        arr[row + 2][column],
        arr[row + 2][column + 1],
        arr[row + 2][column + 2],
      ]);
    }
  }

  let maxSum = -Infinity;

  hourglassWindows.forEach((window) => {
    const sumWindow = window.reduce((acc, curr) => acc + curr, 0);

    if (sumWindow > maxSum) maxSum = sumWindow;
  });

  return maxSum;
}

// 1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
// 0 0 0 0 0 0
//
// [arr[0][0], arr[0][1], arr[0][2]]
// [arr[1][1]]
// [arr[2][0], arr[2][1], arr[2][2]]
//
// [arr[0][1], arr[0][2], arr[0][3]]
// [arr[1][2]]
// [arr[2][1], arr[2][2], arr[2][3]]
// ...
// ...
// [arr[1][0], arr[1][1], arr[1][2]]
// [arr[2][1]]
// [arr[3][0], arr[3][1], arr[3][2]]
//
//
// Pattern of hourglass?
//
// Iterate through matrix: 2 For loop
// i => rows
// j => columns
//
// Windows to store hourglass iteration:
// [arr[row][column], arr[row][column+1], arr[row][column+2], arr[row+1][column+1], arr[row+2][column], arr[row+2][column+1], arr[row+2][column+2]]
// i < n - 2
// j < n - 2
//
// Slide 1 step to the right (column + 1) => add 3 more element + remove 3 more element
// => add 1 unit for column:    [arr[row][column+3], arr[row+1][column+2], [arr[row+2][column+3]]
// => remove 1 unit for column: [arr[row][column], arr[row+1][column+1], [arr[row+2][column]]
// => row of added and removed elements remains
//
// Slide 1 step down (row + 1) => add 3 more element + remove 3 more element
// => add 1 unit for row:    [arr[row+3][column], arr[row+3][column+1], [arr[row+3][column+2]]
// => remove 1 unit for row: [arr[row][column], arr[row][column+1], arr[row][column+2]]
// => colum of added and removed elements remains
//
//
// h => current index => row 1
// i => row h => Sum 3 elements =>
// j => row h + 1 => Get 1 middle elements
// k => row h + 2 => Sumg 3 elementjs
//
//
// What to store hourglass iteration?
//
//

var array1 = Array.from(Array(6), () => new Array(6).fill(0));
array1[0][0] = 1;
array1[0][1] = 1;
array1[0][2] = 1;
array1[2][0] = 1;
array1[2][1] = 1;
array1[2][2] = 1;
array1[1][1] = 1;

hourglassSum(array1);
