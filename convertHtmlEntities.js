/*  
Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


*/

function convertHTML(str) {
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };

  return str
    .split("")
    .map((entity) => htmlEntities[entity] || entity)
    .join("");
}

/* Tests */

console.log(convertHTML("Dolce & Gabbana")); // should return the string Dolce &amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return the string Hamburgers &lt; Pizza &lt; Tacos.
console.log(convertHTML("Sixty > twelve")); // should return the string Sixty &gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); // should return the string Stuff in &quot;quotation marks&quot;.
console.log(convertHTML("Schindler's List")); // should return the string Schindler&apos;s List.
console.log(convertHTML("<>")); // should return the string &lt;&gt;.
console.log(convertHTML("abc")); // should return the string abc.

/* Solution 2
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");


*/
