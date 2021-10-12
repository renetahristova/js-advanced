function solve(arr) {
  arr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
  for (let el of arr) {
    console.log(el);
  }
}
solve(["alpha", "beta", "gamma"]);
// Write a function that orders a given array of strings, by length in ascending order as primary criteria,
// and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the elements of the ordered array of strings, printed each on a new line.
