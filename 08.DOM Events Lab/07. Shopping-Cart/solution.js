function solve() {
  //add button
  let addButtonElement = Array.from(
    document.getElementsByClassName("add-product")
  );
  //console.log(addButtonElement);
  addButtonElement.forEach((element) => {
    element.addEventListener("click", onClick);
  });
  //checkout button
  document
    .getElementsByClassName("checkout")[0]
    .addEventListener("click", onCheckout);

  //text area
  let textAreaElement = document.getElementsByTagName("textarea")[0];
  //console.log(textAreaElement);

  let totalPrice = 0;
  let products = [];

  function onClick(e) {
    let productName =
      e.target.parentNode.parentNode.getElementsByClassName("product-title")[0]
        .textContent;
    let priceElement = Number(
      e.target.parentNode.parentNode.getElementsByClassName(
        "product-line-price"
      )[0].textContent
    );

    let addedProducts = `Added ${productName} for ${priceElement.toFixed(
      2
    )} to the cart.\n`;
    totalPrice += priceElement;
    textAreaElement.value += addedProducts;
    if (!products.includes(productName)) {
      products.push(productName);
    }
  }
  function onCheckout() {
    textAreaElement.value += `You bought ${products.join(
      ", "
    )} for ${totalPrice.toFixed(2)}.`;
    addButtonElement.map((btn) => {
      btn.disabled = true;
    });
    document.getElementsByClassName("checkout")[0].disabled = true;
  }
}

// You will be given some products that you should be able to add to your cart.
// Each product will have a name, picture and a price.
