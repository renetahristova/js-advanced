function subtract() {
  //console.log('TODO:...');
  let firstNumElement = document.getElementById("firstNumber").value;
  let secondNumElement = document.getElementById("secondNumber").value;

  let result = Number(firstNumElement) - Number(secondNumElement);

  document.getElementById("result").textContent = result;
}

// An HTML page holds two text fields with ids firstNumber andsecondNumber Write a function to
// subtract the values from these text fields and display the result in the div named &quot;result&quot;.
