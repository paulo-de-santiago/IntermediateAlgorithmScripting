/* DNA Pairing

Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
 */

function pairElement(str) {
  console.log(str);
  let pairedArray = [];
  console.log(pairedArray);

  function pairCheck(letter) {
    if (letter === "A") {
      return "T";
    } else if (letter === "T") {
      return "A";
    } else if (letter === "C") {
      return "G";
    } else if (letter === "G") {
      return "C";
    }
  }

  for (let letter of str) pairedArray.push([letter, pairCheck(letter)]);

  return pairedArray;
}

// tests

console.log(pairElement("ATCGA")); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
console.log(pairElement("TTGAG")); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].

console.log(pairElement("CTCTA")); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].

/* 
Problem Explanation

    You will get a DNA strand sequence and you need to get the pair and return it as a 2D array of the base pairs. Keep in mind that the provided strand should be first always.

    Another way to interpret the problem: there are four potential characters that exist in DNA: “A”, “T”, “G”, and “C”. “A” and “T” are always paired together, and “G” and “C” are always paired together.
    This problem presents you with an input, e.g. “ATCGA”. Each of those five characters are missing their pairs.
    E.g. the first character “A” needs to be paired with “T” to give the array element [“A”, “T”].
    The second character “T” needs to be paired with “A” to give the array element [“T”, “A”].
    The number of elements in the final output equals the number of characters in the input.

This problem does not involve rearranging the input into different combinations or permutations.


Hint 1

    There are two pairs of values, A-T and C-G.

Hint 2

    A switch would be a natural option here, because each character in the string has 4 possible values.

Hint 3

    The result must be an array of arrays.



*/
