function extractText() {
    let listItemsElements = document.querySelectorAll('ul#items li');
    let textAreaElement = document.getElementById('result');

    for (let items of listItemsElements) {
        textAreaElement.value += items.textContent +'\n';
    }
    
}