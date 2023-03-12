/* Steamroller

Flatten a nested array. You must account for varying levels of nesting.
 */

function steamroll(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

/* Tests */

console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4].
//Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
//Global variables should not be used.

/* Solution 1

function steamrollArray(arr) {
  const flattenedArray = [];
  // Loop over array contents
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // Recursively flatten entries that are arrays
      //  and push into the flattenedArray
      flattenedArray.push(...steamrollArray(arr[i]));
    } else {
      // Copy contents that are not arrays
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
};


/* Solution 2
function steamrollArray(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

Code Explanation

    Use spread operator to concatenate each element of arr with an empty array
    Use Array.some() method to find out if the new array contains an array still
    If it does, use recursion to call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
    If it does not, return the flattened array


*/

// test here
steamrollArray([1, [2], [3, [[4]]]]);
/* Solution 3

function steamrollArray(arr) {
  return arr
    .toString()
    .replace(",,", ",") // "1,2,,3" => "1,2,3"
    .split(",") // ['1','2','3']
    .map(function(v) {
      if (v == "[object Object]") {
        // bring back empty objects
        return {};
      } else if (isNaN(v)) {
        // if not a number (string)
        return v;
      } else {
        return parseInt(v); // if a number in a string, convert it
      }
    });
}


Code Explanation

    First we turn the array to a string, which will give us a string of numbers separated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix later in our if statement.
    We replace the double comma with one, then split it back into an array.
    map through the array and fix object values and convert string numbers to regular numbers.


*/

/* Solution 4

function steamrollArray(val,flatArr=[]) {
  val.forEach(item => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

*/

/* Solution 5

function steamrollArray(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}
*/

/* 

Solution with while loop but limited
function steamroller(arr) {
  let i = 0;
  while (i < 4) {
    arr = arr.flat();
    i += 1;
  }


  return arr;
}*/
