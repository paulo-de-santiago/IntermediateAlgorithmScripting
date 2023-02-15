/* //Returns elements included in an array
function destroyer(arr, ...elems) {
  return arr.filter((elem) => elems.includes(elem));
}
 */
//Returns elements NOT included in an array
function destroyer(arr, ...elems) {
  return arr.filter((elem) => !elems.includes(elem));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); //should return [1, 1].
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3)); // should return [1, 5, 1].
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); //should return [1].
console.log(destroyer([2, 3, 2, 3], 2, 3)); // should return [].
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"].
console.log(
  destroyer(
    [
      "possum",
      "trollo",
      12,
      "safari",
      "hotdog",
      92,
      65,
      "grandma",
      "bugati",
      "trojan",
      "yacht",
    ],
    "yacht",
    "possum",
    "trollo",
    "safari",
    "hotdog",
    "grandma",
    "bugati",
    "trojan"
  )
); // should return [12,92,65].

/* 
Solution 1 
function destroyer(arr) {
  const valsToRemove = Object.values(arguments).slice(1);
  const filteredArray = [];

  for (let i = 0; i < arr.length; i++) {
    let removeElement = false;
    for (let j = 0; j < valsToRemove.length; j++) {
      if (arr[i] === valsToRemove[j]) {
        removeElement = true;
      }
    }
    if (!removeElement) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
}

Code Explanation

    Create an array of valsToRemove using Object.values(arguments).slice(1) and store it in the variable valsToRemove. We’ll use this to check against arr.

    Start a basic for loop to iterate through arr. Nest another for loop inside the first, changing the integer variable j and arr to valsToRemove. This second loop will iterate through valsToRemove .

        Within the second loop create an if statement, checking strictly === that the current value of arr[i] is equal to valsToRemove[j].

        If the value at the current index is equal in both arrays, let removeElement to true remove it from arr.

        If the value is not flagged for removal, add it the the filteredArray.

    Outside of the nested loops, return the filteredArray.


*/

/* 
SOLUTION 2 with Array

function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !valsToRemove.includes(val);
  });
}

Code Explanation

    Declare a variable named valsToRemove and set it equal to a new Array object from() the arguments passed into the function. Use the slice() method on the array of arguments, starting from the second index, 1.

    Return the filtered array, using includes() in the callback function to check if val is not in valsToRemove; returning true to keep the value in the original array or false to remove it.





*/
