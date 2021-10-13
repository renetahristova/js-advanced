function create(words) {
  words.forEach((word) => {
    let contentElement = document.getElementById("content");
    let createDiv = document.createElement("div");
    let createP = document.createElement("p");

    createP.style.display = "none";

    createDiv.addEventListener("click", function () {
      createP.style.display = "block";
    });

    contentElement.appendChild(createDiv);
    createDiv.appendChild(createP);
    createP.textContent = word;
  });
}

// You will receive an array of strings. For each string, create a div with a paragraph with the string in it.
// Each paragraph is initially hidden (display:none). Add a click event listener to each div that displays the
// hidden paragraph. Finally, you should append all divs to the element with an id content.
