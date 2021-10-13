function addItem() {
  let newItemTextElement = document.getElementById("newItemText").value;
  let liItemElement = document.createElement("li");

  liItemElement.appendChild(document.createTextNode(newItemTextElement));
  document.getElementById("items").appendChild(liItemElement);
  //clear input
  document.getElementById("newItemText").value = "";
}

//Write a function that read the text inside an input field and appends the specified text to a list inside an HTML page.
