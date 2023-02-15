function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((elem, _, arr) => arr.lastIndexOf(elem) == arr.indexOf(elem));

  /*     function diffArray(arr1, arr2) {
      return arr1.concat(arr2).filter((elem,_,arr) => arr.lastIndexOf(elem)==arr.indexOf(elem));
    } */
}

/* return arr1 //returns the final iteration of the array
.concat(arr2) //combines arr1 and arr2 into a  new array
.filter( //creates a new array with elements that pass a test
item => //this is a shorthand for a function expression
!arr1.includes(item) //this is a test that only passes elements that are NOT included in arr1
|| !arr2.includes(item) //this is a test that only passes elements that are NOT included in arr2
   )
 */
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // should return an array.
console.log(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
); // should return ["pink wool"].
console.log(
  ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
); // should return an array with one item.
console.log(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
); // should return ["diorite", "pink wool"].
console.log(
  ["andesite", "grass", "dirt", "pink wool", "dead shrub"],
  ["diorite", "andesite", "grass", "dirt", "dead shrub"]
); // should return an array with two items.
console.log(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
); // should return [].
console.log(
  ["andesite", "grass", "dirt", "dead shrub"],
  ["andesite", "grass", "dirt", "dead shrub"]
); //should return an empty array.
console.log([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4].
console.log([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return an array with one item.
console.log([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // should return ["piglet", 4].
console.log([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); // should return an array with two items.
console.log([], ["snuffleupagus", "cookie monster", "elmo"]); // should return ["snuffleupagus", "cookie monster", "elmo"].
console.log([], ["snuffleupagus", "cookie monster", "elmo"]); // should return an array with three items.
console.log([1, "calf", 3, "piglet"], [7, "filly"]); // should return [1, "calf", 3, "piglet", 7, "filly"].
console.log([1, "calf", 3, "piglet"], [7, "filly"]); // should return an array with six items.
