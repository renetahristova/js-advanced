window.addEventListener("load", solve);

function solve() {
  //form eleents
  let modelElement = document.getElementById("model");
  let yearElement = document.getElementById("year");
  let descriptionElement = document.getElementById("description");
  let priceElement = document.getElementById("price");
  let addElement = document.getElementById("add");

  //button submit
  addElement.addEventListener("click", (e) => {
    e.preventDefault();

    //validation
    // let positiveNumRegex = new RegExp(/\d*(\.d*)?/g);
    // let yearRegex = new RegExp(/\^d{4}$/);
    let regex = new RegExp(/^[+]?\d+([.]\d+)?$/);
    if (
      modelElement.value == "" ||
      yearElement.value == "" ||
      descriptionElement.value == "" ||
      priceElement.value == ""
    ) {
      console.log("no");
      return;
    }
    if (!regex.test(priceElement.value) || !regex.test(yearElement.value)) {
      console.log("not positive price or year ");
      return;
    }

    //information
    let furnitureList = document.getElementById("furniture-list");

    let infoRow = document.createElement("tr");
    infoRow.className = "info";
    furnitureList.appendChild(infoRow);

    // td info name and price rouned to second digit

    let nameData = document.createElement("td");
    nameData.textContent = modelElement.value;
    infoRow.appendChild(nameData);
    let priceData = document.createElement("td");
    priceData.textContent = Number(priceElement.value).toFixed(2);
    infoRow.appendChild(priceData);

    //td buttons

    let btnData = document.createElement("td");
    infoRow.appendChild(btnData);

    let moreBtn = document.createElement("button");
    moreBtn.className = "moreBtn";
    moreBtn.textContent = "More Info";
    btnData.appendChild(moreBtn);

    let buyBtn = document.createElement("button");
    buyBtn.className = "buyBtn";
    buyBtn.textContent = "Buy it";
    btnData.appendChild(buyBtn);

    //hidden td

    let hiddenRow = document.createElement("tr");
    hiddenRow.className = "hide";
    furnitureList.appendChild(hiddenRow);

    let yearInfo = document.createElement("td");
    yearInfo.textContent = `Year: ${yearElement.value}`;
    hiddenRow.appendChild(yearInfo);

    let descriptionInfo = document.createElement("td");
    descriptionInfo.textContent = `Description: ${descriptionElement.value}`;
    descriptionInfo.colSpan = 3;
    hiddenRow.appendChild(descriptionInfo);

    modelElement.value = "";
    yearElement.value = "";
    descriptionElement.value = "";
    yearElement.value = "";
    //more info btn
    moreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      if (e.target.textContent == "More Info") {
        e.target.textContent = "Less Info";
        hiddenRow.style.display = "contents";
      } else {
        e.target.textContent = "More Info";
        hiddenRow.style.display = "none";
      }
    });
    //buy btn
    buyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      currentFurniture = e.target.parentElement.parentElement;
      currentFurniture.remove();
      //---removed---
      //and increase the current total price with the price of the furniture.
      let totalPrice = document.querySelector(".total-price");
      let furniturePrice = e.target.parentNode.previousSibling.textContent;

      let currentTotal = Number(totalPrice.textContent);
      totalPrice.textContent = (currentTotal + Number(furniturePrice)).toFixed(
        2
      );
    });
  });
}
