function solve(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i += 2) {
    result += arr[i];
    result += " ";
  }
  console.log(result);
}
solve(["20", "30", "40", "50", "60"]);
solve(["5", "10"]);

// Write a function that finds the elements at even positions in an array.
// The input comes as array of string elements.
// The output is printed on the console. Collect all elements in a string, separated by space.
