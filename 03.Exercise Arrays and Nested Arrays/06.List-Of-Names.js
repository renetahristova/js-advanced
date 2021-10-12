function solve(arr) {
  let sorted = arr.sort();
  let n = sorted.length;
  let res = [];

  for (let i = 1; i <= n; i++) {
    res = [i] + "." + sorted[i - 1];
    console.log(res);
  }
}
solve(["John", "Bob", "Christina", "Ema"]);
// You will receive an array of names. Sort them alphabetically in ascending order and print
//  a numbered list of all the names, each on a new line. 80/100
