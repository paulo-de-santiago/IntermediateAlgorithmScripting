function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, (L) =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

console.log(rot13("LBH QVQ VG!"));

function rot13(str) {
  // LBH QVQ VG!
  var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var cipher = "NOPQRSTUVWXYZABCDEFGHIJKLM";

  var replacer = [];
  for (var x = 0; x < str.length; x++) {
    //loops through the given string
    var index = alphabet.indexOf(str[x]); //sets the index of letter from the coded string
    if (cipher.charCodeAt(index) > 0) {
      //check to see if the letter is alphanumeric
      replacer.push(String.fromCharCode(cipher.charCodeAt(index))); //add to array
    } else replacer.push(str[x]); //adds non-alphanumeric to the array
  }
  return replacer.join(""); //combines it all back together
}

// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));

function rot13(str) {
  // LBH QVQ VG!

  var finish = str.length;
  var result = "";
  var letterA;
  var letterB;

  for (let i = 0; i < finish; i++) {
    letterA = str.charCodeAt(i);

    if (letterA >= 78 && letterA <= 90) {
      letterA = letterA - 13;
      letterB = String.fromCharCode(letterA);
      result = result + letterB;
    } else if (letterA >= 65 && letterA < 78) {
      letterA = letterA + 13;
      letterB = String.fromCharCode(letterA);
      result = result + letterB;
    } else if (letterA >= 32 && letterA <= 64) {
      letterA = letterA;
      letterB = String.fromCharCode(letterA);
      result = result + letterB;
    }
  }

  return result;
}

// Change the inputs below to test
console.log(rot13("LBH QVQ VG!"));
