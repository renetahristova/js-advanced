function solve(array, startIndex, endIndex) {
  if (Array.isArray(array) == false) {
    return NaN;
  }
  if (startIndex < 0) {
    startIndex = 0;
  }
  if (endIndex > array.length - 1) {
    endIndex = array.length - 1;
  }

  return array
    .slice(startIndex, endIndex + 1)
    .map(Number)
    .reduce((acc, x) => acc + x, 0);
}
solve([10, 20, 30, 40, 50, 60], 3, 300);
// Write a function to sum a range of numeric elements from an array.
// The function takes three parameters - the first is an array, the second is the start index and the third is
// the end index. Both indexes are inclusive. Have in mind that the array elements may not be of type
// Number and cast everything. Implement the following error handling:
//  If the first element is not an array, return NaN
//  If the start index is less than zero, consider its value to be a zero
//  If the end index is outside the bounds of the array, assume it points to the last index of the array
