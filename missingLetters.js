/* Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  for (let i = 0; i <= str.length - 1; i++) {
    if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
      return String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }
}

console.log(fearNotLetter("abce")); // should return the string d.
console.log(fearNotLetter("abcdefghjklmno")); // should return the string i.
console.log(fearNotLetter("stvwx")); // should return the string u.
console.log(fearNotLetter("bcdf")); // should return the string e.
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined.

/* 


Hints
Hint 1

You will need to convert from character to ASCII code using the two methods provided in the description.
Hint 2

You will have to check for the difference in ASCII code as they are in order. Using a chart would be very helpful.
Hint 3

You will need to figure out where the missing letter is, along with handling the case that there is not missing letter as it needs an specific return value.
 */
