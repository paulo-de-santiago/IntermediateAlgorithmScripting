/* Roman Numeral Converter

Convert the given number into a roman numeral.
Roman numerals 	Arabic numerals
M 	1000
CM 	900
D 	500
CD 	400
C 	100
XC 	90
L 	50
XL 	40
X 	10
IX 	9
V 	5
IV 	4
I 	1

All roman numerals answers should be provided in upper-case.
 */

function convertToRoman(num) {
  let result = "";
  while (num) {
    if (num >= 1000) {
      result += "M";
      num -= 1000;
    } else if (num >= 500) {
      if (num >= 900) {
        result += "CM";
        num -= 900;
      } else {
        result += "D";
        num -= 500;
      }
    } else if (num >= 100) {
      if (num >= 400) {
        result += "CD";
        num -= 400;
      } else {
        result += "C";
        num -= 100;
      }
    } else if (num >= 50) {
      if (num >= 90) {
        result += "XC";
        num -= 90;
      } else {
        result += "L";
        num -= 50;
      }
    } else if (num >= 10) {
      if (num >= 40) {
        result += "XL";
        num -= 40;
      } else {
        result += "X";
        num -= 10;
      }
    } else if (num >= 5) {
      if (num >= 9) {
        result += "IX";
        num -= 9;
      } else {
        result += "V";
        num -= 5;
      }
    } else {
      if (num >= 4) {
        result += "IV";
        num -= 4;
      } else {
        result += "I";
        num -= 1;
      }
    }
  }
  return result;
  console.log(result);
}

/* Tests */

console.log(convertToRoman(2)); // should return the string II.
console.log(convertToRoman(3)); // should return the string III.
console.log(convertToRoman(4)); // should return the string IV.
console.log(convertToRoman(5)); // should return the string V.
console.log(convertToRoman(9)); // should return the string IX.
console.log(convertToRoman(12)); // should return the string XII.
console.log(convertToRoman(16)); // should return the string XVI.
console.log(convertToRoman(29)); //should return the string XXIX.
console.log(convertToRoman(44)); // should return the string XLIV.
console.log(convertToRoman(45)); // should return the string XLV.
console.log(convertToRoman(68)); // should return the string LXVIII
console.log(convertToRoman(83)); // should return the string LXXXIII
console.log(convertToRoman(97)); // should return the string XCVII
console.log(convertToRoman(99)); // should return the string XCIX
console.log(convertToRoman(400)); // should return the string CD
console.log(convertToRoman(500)); // should return the string D
console.log(convertToRoman(501)); // should return the string DI
console.log(convertToRoman(649)); //should return the string DCXLIX
console.log(convertToRoman(798)); // should return the string DCCXCVIII
console.log(convertToRoman(891)); //should return the string DCCCXCI
console.log(convertToRoman(1000)); // should return the string M
console.log(convertToRoman(1004)); // should return the string MIV
console.log(convertToRoman(1006)); // should return the string MVI
console.log(convertToRoman(1023)); // should return the string MXXIII
console.log(convertToRoman(2014)); // should return the string MMXIV
console.log(convertToRoman(3999)); // should return the string MMMCMXCIX
