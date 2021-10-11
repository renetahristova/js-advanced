function solve(input) {
let result;
let inputType = typeof(input);

if (inputType !== 'number') {
    console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
}
else{
result = Math.pow(input, 2) * Math.PI;
console.log(result.toFixed(2));
}
}

solve(5);
solve('nimber');