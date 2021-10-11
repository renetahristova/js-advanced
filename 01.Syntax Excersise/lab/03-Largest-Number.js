function findLargestNumber (firstNum, secondNum, thirdNum) {
let result;

if (firstNum > secondNum && firstNum > thirdNum ) {
    result = firstNum;
}else if (thirdNum > firstNum && thirdNum > secondNum) {
    result = thirdNum;
} else {
    result = secondNum;
}
 
console.log(`The largest number is ${result}.`);
}

findLargestNumber(5, -3, 16);