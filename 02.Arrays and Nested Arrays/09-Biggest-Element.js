function solve(matrix) {
  let num = 0;
  matrix.forEach((row) => row.forEach((col) => (num = Math.max(num, col))));
  console.log(num);
}
solve([
  [20, 50, 10],
  [8, 33, 145],
]);
// Write a function that finds the biggest element inside a matrix.
// The input comes as array of arrays, containing number elements (2D matrix of numbers).
// The output is the return value of your function. Find the biggest element and return it.
