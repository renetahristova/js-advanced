function colorize() {
//change the color of all even rows when the user clicks a button. Apply the colorTeal.
let rowsElement = document.querySelectorAll("table tr");
let index = 0;

for (let row of rowsElement) {
index++;
    if (index % 2 == 0){
        row.style.background = "teal";
    }
  }
}