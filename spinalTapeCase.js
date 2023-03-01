/* Spinal Tap Case

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
  let lower = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  return lower
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

/* ToLowerCase() */

/* function spinalCase(str) {
  let lower = str.toLowerCase();

  return lower;
} */

console.log(spinalCase("This Is Spinal Tap")); // should return the string this-is-spinal-tap.
console.log(spinalCase("thisIsSpinalTap")); // should return the string this-is-spinal-tap.
console.log(spinalCase("The_Andy_Griffith_Show")); // should return the string the-andy-griffith-show.
console.log(spinalCase("Teletubbies say Eh-oh")); // should return the string teletubbies-say-eh-oh.
console.log(spinalCase("AllThe-small Things")); // should return the string all-the-small-things.
