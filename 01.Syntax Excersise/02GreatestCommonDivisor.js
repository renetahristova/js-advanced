function solve(first, second) {
    let firstNum = Number(first);
    let secondNum = Number(second);
    let gcd = 1;
    for (let i = Math.min(firstNum, secondNum); i >= 1; i--) {
        if (Math.max(firstNum, secondNum) % i === 0 && Math.min(firstNum, secondNum) % i === 0 && i > gcd) {
            gcd = i;
        }
    }
    console.log(gcd);
}
solve(2154, 458);