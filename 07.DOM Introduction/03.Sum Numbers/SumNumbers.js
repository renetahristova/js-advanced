function calc() {
    // TODO: sum = num1 + num2
    let firstNumberElement = document.getElementById('num1').value;
    let secondNumberElement = document.getElementById('num2').value;
    let sum = Number(firstNumberElement) + Number(secondNumberElement);

    document.getElementById('sum').value = sum;

}
