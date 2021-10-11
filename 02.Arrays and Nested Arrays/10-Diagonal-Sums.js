function solve(matrix) {
  let sum1 = 0;
  let sum2 = 0;

  for (let row = 0; row < matrix.length; row++) {
    sum1 += matrix[row][row];
    sum2 += matrix[row][matrix.length - row - 1];
  }
  console.log(sum1 + " " + sum2);
}
solve([
  [20, 40],
  [10, 60],
]);
// A square matrix of numbers comes as an array of strings, each string holding numbers (space separated).
// Write a function that finds the sum at the main and at the secondary diagonals.
// The input comes as array of arrays, containing number elements (2D matrix of numbers).
// The output is printed on the console, on a single line separated by space. First print the sum at the main
// diagonal, then the sum at the secondary diagonal.
