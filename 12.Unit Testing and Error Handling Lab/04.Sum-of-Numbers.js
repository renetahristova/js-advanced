//Write tests to check the functionality of the following code:
function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += Number(num);
  }
  return sum;
}

// Your tests will be supplied with a function named &#39;sum()&#39;. It should meet the following requirements:
//  Take an array of numbers as argument
//  Return the sum of the values of all elements inside the array
