function solve(arr) {
  arr.sort((a, b) => a - b);

  let result = arr.slice(0, 2);
  console.log(result.join(" "));
}

solve([30, 15, 50, 5]);

// Write a function that prints the two smallest elements from an array of numbers.
// The input comes as array of number elements.
// The output is printed on the console on a single line, separated by space.
