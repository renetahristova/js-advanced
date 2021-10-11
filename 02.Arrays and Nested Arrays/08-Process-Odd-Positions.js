function solve(arr) {
  let result = arr
    .filter((num, i) => i % 2 == 1)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
  console.log(result);
}
//solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);

// You are given an array of numbers. Write a JS function that return the elements at odd positions from the
// array, doubled and in reverse order.
// The input comes as array of number elements.
// The output is return on the console on a single line, separated by space.
