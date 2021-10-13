function calc() {
  // TODO: sum = num1 + num2
  let firstNumElement = document.getElementById("num1");
  let secNumElement = document.getElementById("num2");
  let sumElement = document.getElementById("sum");

  let sum = Number(firstNumElement.value) + Number(secNumElement.value);
  sumElement.value = sum;
}
