function notify(message) {
  let resultElement = document.querySelector("#notification");
  resultElement.style.display = "block";
  resultElement.textContent = message;

  resultElement.addEventListener("click", () => {
    resultElement.style.display = "none";
  });
}
