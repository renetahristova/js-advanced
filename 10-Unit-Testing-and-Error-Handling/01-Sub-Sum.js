function subSum (numbers, startIdx, endIdx){
    let result = numbers
    .slice(startIdx, endIdx)
    .reduce((a, x) => a+x, 0);

    return result;
}

function testSubSum () {
    //arange
    let numbers = [10, 20, 30, 40, 50, 60];
    let startIdx = 3;
    let endIdx = 300;
    let expectedResult = 150;
    //act 
    let actualResult = subSum(numbers, startIdx, endIdx);
    //assert
    if (actualResult === expectedResult) {
        console.log('First test is passing');
    } else {
        console.error('First test failed!');
    }
    
}
testSubSum();