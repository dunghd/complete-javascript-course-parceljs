"use strict";

function possibleChanges(usernames) {
  // Write your code here
  const results = [];

  for (let i = 0; i < usernames.length; i++) {
    const name = usernames[i];
    let isCanChange = false;

    for (let j = 0; j < name.length - 1; j++) {
      if (
        name[j] !== name[j + 1] &&
        name[j].localeCompare(name[j + 1]) !== -1
      ) {
        results.push("YES");
        isCanChange = true;
        break;
      } else {
        continue;
      }
    }

    if (!isCanChange) {
      results.push("NO");
    }
  }

  return results;
}

/*

Take first letter:
- Compare first letter with each remaining character:
    if first > letter[i] return YES; break;
    else continue;

*/

console.log(possibleChanges(["bee", "superhero", "aec"]));
