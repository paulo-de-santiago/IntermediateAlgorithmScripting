/* Pig Latin

Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
  let consonantRegexCheck = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegexCheck);

  return myConsonants !== null
    ? str.replace(consonantRegexCheck, "").concat(myConsonants).concat("ay")
    : str.concat("way");
}

console.log(translatePigLatin("california")); // should return the string aliforniacay.
console.log(translatePigLatin("paragraphs")); // should return the string aragraphspay.
console.log(translatePigLatin("glove")); // should return the string oveglay.
console.log(translatePigLatin("algorithm")); // should return the string algorithmway.
console.log(translatePigLatin("eight")); // should return the string eightway.
//Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

//Should handle words without vowels.

console.log(translatePigLatin("rhythm")); // should return the string rhythmay

/* 
Solution 3 (Click to Show/Hide)

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}



Code Explanation

    First, check to see if the string begins with a vowel.
        The regex looks at the beginning of the string ^ for one of the specified characters [aeiou]
        If it does, you only need to return the original string with “way” appended on the end.
    If the string does not start with a vowel, we want to build a string which contains every consonant before the first vowel in the provided string.
        To do this, look at the beginning of a string ^ for one or more characters + NOT specified [^aeiou].
        If there is a match (and in this case, there always will be), match() returns an Array with the matched string as the first element, which is all we want. Grab it with [0].
    Now, we can start building our Pig Latin string to return. This can be built in three parts:
        The first part contains all of the characters in the original string, starting from the first vowel. We can easily get these characters by creating a substring of the original string, with its starting index being the first vowel.
        The second part contains the consonant string we just built. (If you add the second and first parts of this string together, you will get the original string.)
        The final part contains “ay”.

*/

//Solution 4

//function translatePigLatin(str) {
//return str.replace(/^[aeiou]\w*/, "$&way").replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");}

/* 
  
  Code Explanation
  
      Use replace() on the string, using a regular expression to check if the first letter is a consonant and adding way at the end in this case. If the first letter is a consonant nothing will happen at this point.
      Use replace() again to check for consonants at the beginning of the word and to move it or them to the end of the word and add ay at the end.



  */
