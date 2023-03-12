/* 
Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation.

*/

function truthCheck(collection, pre) {
  return collection.every((obj) => obj[pre]);
}

/* Tests */

truthCheck(
  [
    { name: "Quincy", role: "Founder", isBot: false },
    { name: "Naomi", role: "", isBot: false },
    { name: "Camperbot", role: "Bot", isBot: true },
  ],
  "isBot"
); // should return false.

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "name"
  )
); // should return true.

console.log(
  truthCheck(
    [
      { name: "Quincy", role: "Founder", isBot: false },
      { name: "Naomi", role: "", isBot: false },
      { name: "Camperbot", role: "Bot", isBot: true },
    ],
    "role"
  )
); // should return false.

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
    ],
    "number"
  )
); // should return true.

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "caught"
  )
); // should return false.

console.log(
  truthCheck(
    [
      { name: "Pikachu", number: 25, caught: 3 },
      { name: "Togepi", number: 175, caught: 1 },
      { name: "MissingNo", number: NaN, caught: 0 },
    ],
    "number"
  )
); // should return false.

console.log(
  truthCheck(
    [
      { name: "Quincy", username: "QuincyLarson" },
      { name: "Naomi", username: "nhcarrigan" },
      { name: "Camperbot" },
    ],
    "username"
  )
); // should return false.

console.log(
  truthCheck(
    [
      { name: "freeCodeCamp", users: [{ name: "Quincy" }, { name: "Naomi" }] },
      { name: "Code Radio", users: [{ name: "Camperbot" }] },
      { name: "", users: [] },
    ],
    "users"
  )
); // should return true.

console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "data"
  )
); // should return true.

console.log(
  truthCheck(
    [
      {
        id: 1,
        data: { url: "https://freecodecamp.org", name: "freeCodeCamp" },
      },
      {
        id: 2,
        data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" },
      },
      { id: null, data: {} },
    ],
    "id"
  )
); // should return false.

/* Solution 1

Using for-in loop & hasOwnProperty

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  let counter = 0;
  // Check for each object
  for (let c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}




*/

/* Solution 2 
Using Array.every()


function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

Code Explanation

    Uses the native “every” method to test whether all elements in the array pass the test.
    This link will help Array.prototype.every() 578



*/
