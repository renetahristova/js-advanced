function attachEventsListeners() {
  let buttonsElements = document.querySelectorAll("input[type=button]");
  Array.from(buttonsElements).forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let seconds = Number(convertTime(e));

      document.querySelectorAll("input[type = text]")[0].value =
        seconds / (3600 * 24);
      document.querySelectorAll("input[type = text]")[1].value = seconds / 3600;
      document.querySelectorAll("input[type = text]")[2].value = seconds / 60;
      document.querySelectorAll("input[type = text]")[3].value = seconds;
    });
  });

  function convertTime(e) {
    let convertNumber = Number(e.currentTarget.previousElementSibling.value);
    let typeOfTimeField =
      e.currentTarget.previousElementSibling.previousElementSibling.textContent;
    typeOfTimeField = typeOfTimeField.slice(0, 1).toLowerCase();

    let secondObj = {
      d: (value) => {
        return Math.floor(value * 24 * 60 * 60);
      },
      h: (value) => {
        return Math.floor(value * 60 * 60);
      },
      m: (value) => {
        return Math.floor(value * 60);
      },
      s: (value) => {
        return value;
      },
    };
    return secondObj[typeOfTimeField](convertNumber);
  }
}

// Create a program that converts different time units. Your task is to add a click event listener to all
//[CONVERT] buttons. When a button is clicked, read the corresponding input field, convert the value to the
//three other time units and display it in the input fields.
