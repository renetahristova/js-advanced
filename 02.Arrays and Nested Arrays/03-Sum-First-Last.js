function solve(arr) {
  let res = Number(arr.pop()) + Number(arr.shift());
  console.log(res);
}

solve(["20", "30", "40"]);
solve(["5", "10"]);

// Write a function that calculates and return the sum of the first and the last elements in an array.
// The input comes as array of string elements holding numbers.
// The output is the return value of your function and should be a number.
