function focused() {
  Array.from(document.querySelectorAll("input")).forEach((element) => {
    element.addEventListener("focus", function () {
      this.parentNode.className = "focused";
    });

    element.addEventListener("blur", function () {
      this.parentNode.className = "";
    });
  });
}

// Write a function that highlights the currently active section of a document. There will be multiple divs
// with input fields inside them. Set the class of the div that contains the currently focused input field to
// focused When focus is lost (blurred), remove the class from the element.
