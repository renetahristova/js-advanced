function solve() {
   let addButtonElement = document.getElementsByClassName('.add-product');
   let textAreaElement = document.querySelector('textarea');
  for (const add of addButtonElement) {
     addButtonElement.addEventListener('click', (e) => {
      let currentProductElement = e.currentTarget.parenElement.parenElement;
      let productName = currentProductElement.querySelector('.product-title').textContent;
      let productPrice = Number(currentProductElement.querySelector('.product-line-price').textContent);
      
      textAreaElement.textContent =+ `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   });
  }

  
}