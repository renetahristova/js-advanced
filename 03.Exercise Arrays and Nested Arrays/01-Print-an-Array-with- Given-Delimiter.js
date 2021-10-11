function solve(arr, string) {
  let result = arr.join(string);
  console.log(result);
}
solve(["One", "Two", "Three", "Four", "Five"], "-");

// The input comes as two parameters – an array of strings and a string. The second parameter is the
// delimiter.
// The output is the elements of the array, printed on the console, each element separated from the others
// by the given delimiter.
