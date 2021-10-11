function solve(n, k) {
  let arr = [1];
  for (let i = 0; i < n; i++) {
    arr[i] = sum(arr, k);
  }
  console.log(arr);
  function sum(arr, k) {
    k = arr.length > k ? k : arr.length;
    let sum = 0;
    for (let i = 1; i <= k; i++) {
      sum += arr[arr.length - i];
    }
    return sum;
  }
}
solve(6, 3);
solve(8, 2);

// You are given two integers n and k. Write a function that generates and return the following sequence:
// The first element is 1
// Every following element equals the sum of the previous k elements
// The length of the sequence is n elements
// The input comes as two number arguments. The first element represents the number n, and the second –
// the number k.
// The output is the return value of your function and should be an array of numbers.
