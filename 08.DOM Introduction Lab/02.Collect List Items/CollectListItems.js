function extractText() {
  let ulElement = document.querySelectorAll("ul#items li");
  let boxElement = document.querySelector("#result");
  for (let node of ulElement) {
    boxElement.value += node.textContent + "\n";
  }
}

// Write a JS function that scans a given HTML list and appends all collected list items’ text to a text area
//  on the same page when the user clicks on a button.
