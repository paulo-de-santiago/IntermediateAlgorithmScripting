function sumAll(arr) {
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);

  let sum = 0;
  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
    //console.log(sum);
  }
  return sum;
}

console.log(sumAll([1, 4])); //should return 10.
console.log(sumAll([4, 1])); // should return 10.
console.log(sumAll([5, 10])); // should return 45.
console.log(sumAll([10, 5])); // should return 45.
