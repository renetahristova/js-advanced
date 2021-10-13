function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let searchElement = document.getElementById("searchField");
    let rowElements = Array.from(
      document.querySelectorAll(".container tbody tr")
    );

    let searchText = searchElement.value;

    //clear
    rowElements.forEach((row) => {
      row.className = "";
    });

    let filteredRows = rowElements.filter((row) => {
      let values = Array.from(row.children);
      if (values.some((td) => td.textContent.includes(searchText))) {
        row.className = "select";
      }
    });

    searchElement.value = "";
  }
}

// When the &quot;Search&quot; button is clicked, go through all cells in the table except for the first row (Student name, Student
//email and Student course) and check if the given input has a match (check for both full words and single letters).
//If any of the rows contain the submitted string, add a select class to that row. Note that more than one row
//may contain the given string.
//Оtherwise, if there is no match, nothing should happen.
//Note: After every search (&quot;Search&quot; button is clicked), clear the input field and remove all already selected classes
//(if any) from the previous search, in order for the new search to contain only the new result.
