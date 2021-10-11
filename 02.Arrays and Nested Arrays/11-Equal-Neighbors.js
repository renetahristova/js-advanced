function solve(matrix) {
  let neighbors = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row < matrix.length - 1) {
        if (matrix[row][col] == matrix[row + 1][col]) {
          neighbors++;
        }
      }
      if (col < matrix[row].length) {
        if (matrix[row][col] == matrix[row][col + 1]) {
          neighbors++;
        }
      }
    }
  }
  console.log(neighbors);
}
solve([
  ["2", "3", "4", "7", "0"],

  ["4", "0", "5", "3", "4"],

  ["2", "3", "5", "4", "2"],

  ["9", "8", "7", "5", "4"],
]);

// Write a function that finds the number of equal neighbor pairs inside a matrix of variable size and type
// (numbers or strings).
// The input comes as array of arrays, containing string elements (2D matrix of strings).
// The output is return value of your function. Save the number of equal pairs you find and return it.
