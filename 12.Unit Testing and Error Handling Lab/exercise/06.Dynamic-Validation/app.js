function validate() {
  let inputElement = document.querySelector("#email");
  let emailRegex = /(^[a-z]+@[a-z]+\.[a-z]+$)/;

  inputElement.addEventListener("change", () => {
    if (!emailRegex.test(inputElement.value)) {
      inputElement.classList.add("error");
    } else {
      inputElement.classList.remove("error");
    }
  });
}
