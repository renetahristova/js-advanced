function addItem() {
  let newItemTextElement = document.getElementById("newItemText").value;
  let liItemElement = document.createElement("li");
  let list = document.getElementById("items");

  if (newItemTextElement.length === 0) {
    return;
  }

  liItemElement.appendChild(document.createTextNode(newItemTextElement));
  document.getElementById("items").appendChild(liItemElement);

  let removeElement = document.createElement("a");
  let deleteText = document.createTextNode("[Delete]");

  removeElement.appendChild(deleteText);
  removeElement.href = "#";
  removeElement.addEventListener("click", deleteItem);

  liItemElement.appendChild(removeElement);
  list.appendChild(liItemElement);

  function deleteItem() {
    liItemElement.remove();
  }

  //clear input
  document.getElementById("newItemText").value = "";
}

//Extend the previous problem to display a [Delete] link after each list item. Clicking it,
//should delete the item with no confirmation. You have to add href=# to the link element.
