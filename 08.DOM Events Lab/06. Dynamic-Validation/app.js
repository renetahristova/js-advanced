function validate() {
  let regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/g;

  let inputField = document.querySelector("#email");
  let inputValue = inputField.value;

  inputField.addEventListener("change", checkForError);

  function checkForError(event) {
    if (regex.test(event.target.value)) {
      event.target.classList.remove("error");
      return;
    } else {
      event.target.classList.add("error");
    }
  }
}

//Write a function that dynamically validates an email input field when it is changed. If the input is
//invalid, apply the style &quot;error&quot;. Do not validate on every keystroke, as it is annoying for the user,
//consider only change events.
