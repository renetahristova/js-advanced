function toggle() {
  // console.log('TODO:...');
  let buttonElement = document.getElementsByClassName("button")[0];
  let textElement = document.getElementById("extra");

  if (buttonElement.innerHTML === "More") {
    buttonElement.innerHTML = "Less";
    textElement.style.display = "block";
  } else {
    buttonElement.innerHTML = "More";
    textElement.style.display = "none";
  }
}
// An html file is given and your task is to show more/less information by clicking the [More] button , it
// should reveal the content of a hidden div and changes the text of the button to [Less]. When the same
// link is clicked again (now reading Less), hide the div and change the text of the link to More. Link action
// should be toggleable (you should be able to click the button infinite amount of times).
