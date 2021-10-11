function addItem() {
    let newItemTextElement = document.getElementById('newItemText').value;
    let liItemElement = document.createElement('li');

    liItemElement.appendChild(document.createTextNode(newItemTextElement));
    document.getElementById('items').appendChild(liItemElement);
    //clear input
    document.getElementById('newItemText').value = '';
   
}