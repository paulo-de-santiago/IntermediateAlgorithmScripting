/* 
Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

*/

function rot13(str) {
  let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let transposedStr = "";
  //console.log(transposedArr, alphabet.indexOf("C"));

  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) >= 13) {
      //console.log(alphabet.indexOf(str[i]));
      transposedStr += alphabet[alphabet.indexOf(str[i]) - 13];
      //console.log(transposedStr);
    } else if (alphabet.indexOf(str[i]) < 13 && alphabet.indexOf(str[i]) > -1) {
      transposedStr += alphabet[alphabet.indexOf(str[i]) + 13];
    } else if (alphabet.indexOf(str[i]) === -1) {
      transposedStr += str[i];
    }
  }
  return transposedStr;
}

/* 

FIRST TRY

function rot13(str) {
  let convertion = "";

  for (let i = 0; i < str.length; i++) {
    convertion += str.charAt(i);
    let newString = str.charCodeAt(i) + 13;
    console.log(
      str[i],
      i,
      i + 13,
      str.charAt(i),

      str.charCodeAt(i) + 13,
      String.fromCharCode(newString)
    );
  }
  console.log(convertion);
  return convertion;
} */

/* Tests */

console.log(rot13("SERR PBQR PNZC")); // should decode to the string FREE CODE CAMP
console.log(rot13("SERR CVMMN!")); // should decode to the string FREE PIZZA!
console.log(rot13("SERR YBIR?")); // should decode to the string FREE LOVE?
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.
