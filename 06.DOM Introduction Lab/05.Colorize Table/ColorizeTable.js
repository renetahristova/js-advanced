function colorize() {
  // TODO
  let tableElement = document.querySelectorAll("table tr");

  let index = 0;

  for (let row of tableElement) {
    index++;

    if (index % 2 == 0) {
      row.style.background = "teal";
    }
  }
}
