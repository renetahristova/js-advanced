function subtract() {
    //console.log('TODO:...');
let firstNumElement = document.getElementById('firstNumber').value;
let secondNumElement = document.getElementById('secondNumber').value;

let result = Number(firstNumElement) - Number(secondNumElement);
 
document.getElementById('result').textContent = result;

}