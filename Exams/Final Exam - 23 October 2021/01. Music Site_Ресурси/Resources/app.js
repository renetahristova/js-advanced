window.addEventListener("load", solve);

function solve() {
  //add song elements
  let genreElement = document.getElementById("genre");
  let nameElement = document.getElementById("name");
  let authorElement = document.getElementById("author");
  let dateElement = document.getElementById("date");
  let addButtonElement = document.getElementById("add-btn");

  //all hits elements
  let allHitsElement = document.getElementsByClassName("all-hits-container")[0];

  //saved hits container
  let savedHitsElement = document.getElementsByClassName("saved-container")[0];

  //date regex
  const regex = new RegExp(/\d{2}.\d{2}.\d{4}/);

  //add songs
  addButtonElement.addEventListener("click", (e) => {
    e.preventDefault();

    //input validation
    if (
      genreElement.value == "" ||
      nameElement.value == "" ||
      authorElement.value == "" ||
      dateElement.value == ""
    ) {
      //   console.log("empty");
      return;
    }
    if (!regex.test(dateElement.value)) {
      //   console.log("not a date");
      return;
    }

    //Song Collection
    let collectionDiv = document.createElement("div");
    collectionDiv.className = "hits-info";
    allHitsElement.appendChild(collectionDiv);

    let img = document.createElement("img");
    img.src = "./static/img/img.png";
    collectionDiv.appendChild(img);

    let genre = document.createElement("h2");
    genre.textContent = `Genre: ${genreElement.value}`;
    collectionDiv.appendChild(genre);

    let name = document.createElement("h2");
    name.textContent = `Name: ${nameElement.value}`;
    collectionDiv.appendChild(name);

    let author = document.createElement("h2");
    author.textContent = `Author: ${authorElement.value}`;
    collectionDiv.appendChild(author);

    let date = document.createElement("h3");
    date.textContent = `Date: ${dateElement.value}`;
    collectionDiv.appendChild(date);

    let saveButton = document.createElement("button");
    saveButton.className = "save-btn";
    saveButton.textContent = "Save song";
    collectionDiv.appendChild(saveButton);

    let likeButton = document.createElement("button");
    likeButton.className = "like-btn";
    likeButton.textContent = "Like song";
    collectionDiv.appendChild(likeButton);

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    collectionDiv.appendChild(deleteButton);
    //celar input
    genreElement.value = "";
    nameElement.value = "";
    authorElement.value = "";
    dateElement.value = "";

    //buttons func

    likeButton.addEventListener("click", (e) => {
      e.preventDefault();
      let likesElement = document.querySelector(".likes").children[0];
      //   console.log(likesElement);
      let likesParagraph = likesElement.textContent;
      //   console.log(likesParagraph);
      let [text, num] = likesParagraph.split(":");

      num = Number(num);
      num++;

      likesElement.textContent = `${text}: ${num}`;
      e.target.setAttribute("disabled", "true");
    });

    saveButton.addEventListener("click", (e) => {
      e.preventDefault();

      let savedDiv = e.target.parentElement;

      let saveBtn = savedDiv.getElementsByClassName("save-btn")[0];
      let likeBtn = savedDiv.getElementsByClassName("like-btn")[0];

      savedDiv.removeChild(saveBtn);
      savedDiv.removeChild(likeBtn);

      savedHitsElement.appendChild(savedDiv);
    });

    deleteButton.addEventListener("click", (e) => {
      e.preventDefault();

      let deletedDiv = e.target.parentElement;
      deletedDiv.parentNode.removeChild(deletedDiv);
    });
  });
}
