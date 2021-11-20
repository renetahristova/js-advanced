window.addEventListener("load", solution);

function solution() {
  let nameElement = document.getElementById("fname");
  let emailElement = document.getElementById("email");
  let numberElement = document.getElementById("phone");
  let addressElement = document.getElementById("address");
  let codeElement = document.getElementById("code");
  let submitBtnElement = document.getElementById("submitBTN");

  let editBtnElement = document.getElementById("editBTN");
  let continueBtnElement = document.getElementById("continueBTN");

  let previewElement = document.getElementById("infoPreview");

  submitBtnElement.addEventListener("click", (e) => {
    e.preventDefault();

    //validation

    if (nameElement.value == "" || emailElement.value == "") {
      return;
    }

    submitBtnElement.disabled = true;
    editBtnElement.disabled = false;
    continueBtnElement.disabled = false;

    //adding info to preview 6 li

    let name = document.createElement("li");
    name.textContent = `Full Name: ${nameElement.value}`;
    previewElement.appendChild(name);

    let email = document.createElement("li");
    email.textContent = `Email: ${emailElement.value}`;
    previewElement.appendChild(email);

    let phone = document.createElement("li");
    phone.textContent = `Phone Number: ${numberElement.value}`;
    previewElement.appendChild(phone);

    let address = document.createElement("li");
    address.textContent = `Address: ${addressElement.value}`;
    previewElement.appendChild(address);

    let code = document.createElement("li");
    code.textContent = `Postal Code: ${codeElement.value}`;
    previewElement.appendChild(code);

    nameElement.value = "";
    emailElement.value = "";
    numberElement.value = "";
    addressElement.value = "";
    codeElement.value = "";

    //buttons

    editBtnElement.addEventListener("click", (e) => {
      e.preventDefault();
      editBtnElement.disabled = true;
      continueBtnElement.disabled = true;
      submitBtnElement.disabled = false;

      let nameRestore = name.textContent.split(":");
      nameElement.value = nameRestore[1];

      let emailRestore = email.textContent.split(":");
      emailElement.value = emailRestore[1];

      let numberRestore = phone.textContent.split(":");
      numberElement.value = numberRestore[1];

      let addressRestore = address.textContent.split(":");
      addressElement.value = addressRestore[1];

      let codeRestore = code.textContent.split(":");
      codeElement.value = codeRestore[1];

      previewElement.textContent = "";
    });

    continueBtnElement.addEventListener("click", (e) => {
      e.preventDefault();
      let divElement = document.getElementById("block");
      divElement.textContent = "";
      let header = document.createElement("h3");
      header.textContent = "Thank you for your reservation!";
      divElement.appendChild(header);
    });
  });
}
