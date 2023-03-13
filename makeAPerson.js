/* Make a Person

Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method. The methods that take an argument must accept only one argument and it has to be a string. These methods must be the only available means of interacting with the object.
 */

const Person = function (firstAndLast) {
  let fullName = firstAndLast;

  this.getFirstName = function () {
    return fullName.split(" ")[0];
  };
  this.getLastName = function () {
    return fullName.split(" ")[1];
  };

  this.getFullName = function () {
    return fullName;
  };

  this.setFirstName = function (name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function (name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFirstAndLast = function (name) {
    fullName = name;
  };
  return firstAndLast;
};

const bob = new Person("Bob Ross");
bob.getFullName();
bob.setFirstName("Haskell");
bob.setLastName("Curry");

console.log(bob);

/* Tests */

//No properties should be added. Object.keys(bob).length should always return 6.
// bob instanceof Person should return true.
// bob.firstName should return undefined.
// bob.lastName should return undefined.
console.log(bob.getFirstName()); // should return the string Bob.
console.log(bob.getLastName()); // should return the string Ross.
console.log(bob.getFullName()); // should return the string Bob Ross.
console.log(bob.getFullName()); // should return the string Haskell Ross after bob.setFirstName("Haskell").
console.log(bob.getFullName()); // should return the string Haskell Curry after bob.setLastName("Curry").
console.log(bob.getFullName()); // should return the string Haskell Curry after bob.setFullName("Haskell Curry").
console.log(bob.getFirstName()); // should return the string Haskell after bob.setFullName("Haskell Curry").
console.log(bob.getLastName()); // should return the string Curry after bob.setFullName("Haskell Curry").

/* 
Problem Explanation

When I started the program I figured I just had to create the six functions mentioned in the details. However, it was not that simple. Creating them as a function was not the right way, I had to create them in a different way to make them a key.

There is also a tricky part as you need six keys no more or less, so at first I had the variable that store the original name as a key too which was wrong.

As for the usage of array, that is optional, you could also create new variable to hold the separated string if you wish but an array is easier to deal with as strings are immutable.

Read the instructions carefully, it is always a good hint in itself to run the code and check what the test results were so you know what to expect but do not fixate yourself on that. Once you understand what you need to do, this problem is very easy and straightforward.




Hints
Hint 1

Use the this notation to create the keys instead of regular functions: This means instead of var varName = function() {/*...*/ //}  you should use this.varName = function() {/*...*/}
/*  
Hint 2

The program has a test that checks for how many keys you used, they have to be exactly six, the six mentioned in the details section. This means if you need to work with variables, make them local and not a key: this.fullName = firstAndLast;
Hint 3

Often the code would not work the way you expect it due to wrong variable names, make sure to check that you spell them the right way. This happens to all of us at some point.
Hint 4

If you are having problems with writing the setter methods, below is a template for a set method:

this.setFullName = function(input) {
  // Insert your code here
};
*/
