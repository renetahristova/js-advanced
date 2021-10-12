function solve(arr) {
  //let smallest = arr.sort((a, b) => a - b);
  let lowestNum = [...arr].sort((a, b) => a - b);
  let biggestNum = [...arr].sort((a, b) => b - a);
  let nums = [];
  let i = 0;
  while (nums.length !== arr.length) {
    nums.push(lowestNum.shift());
    lowestNum.pop();
    nums.push(biggestNum.shift());
    biggestNum.pop();
    i++;
  }
  console.log(nums);
}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);
// Write a function that sorts an array of numbers so that the first element is the smallest one,
// the second is the biggest one, the third is the second smallest one, the fourth is the second biggest
// one and so on.Return the resulting array. CpY
