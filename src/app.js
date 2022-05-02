"use strict";

function rotLeft(a, d) {
  return [].concat(a.slice(d), a.slice(0, d));
}

/*
d = 4
[1, 2, 3, 4, 5] => [2, 3, 4, 5, 1] => [3, 4, 5, 1, 2] => [4, 5, 1, 2, 3] => [5, 1, 2, 3, 4]

[1, 2, 3, 4, 5]   d = 4 =>   [5, 1, 2, 3, 4]
 0  1  2  3  4                4  0  1  2  3

[1, 2, 3, 4, 5]   d = 2 =>   [3, 4, 5, 1, 2]
 0  1  2  3  4                2  3  4  0  1

2 array
- 1 original
- 2 new arr will be returned

2nd array will be:
- first part: element 1st arr[d] -> 1st arr[length - 1]
- second part: element arr[0] -> element arr[d - 1]

*/

console.log(rotLeft([1, 2, 3, 4, 5], 4));
