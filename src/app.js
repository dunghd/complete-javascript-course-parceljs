"use strict";

function solution(inputString) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const frequency = {};

  for (let i = 0; i < inputString.length; i++) {
    // console.log(inputString[i]);

    if (!frequency[inputString[i]]) {
      frequency[inputString[i]] = 0;
    }

    frequency[inputString[i]] += 1;
  }

  let isBeautiful = true;

  for (let i = 1; i < alphabet.length; i++) {
    const currentLetter = frequency[alphabet[i]] ?? 0;
    const previousLetter = frequency[alphabet[i - 1]] ?? 0;

    if (currentLetter > previousLetter) {
      isBeautiful = false;
    }
  }

  return isBeautiful;
}

/*

For loop go through the inputString
- Collect the frequency of each letter push in the array to compare with the list of the ordered alphabet
- For loop through alphabet
  foreach letter in alphabet check it in frequency whether its DOESN'T have more frequency than the previous letter

*/

console.log(solution(`bbbaacdafe`));
console.log(solution(`aabbb`));
console.log(solution(`bbc`));
