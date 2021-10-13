function deleteByEmail() {
  let emailElement = document.getElementsByName("email")[0].value;
  let secondColumnElement = document.querySelectorAll(
    "#customers tr td:nth-child(2)"
  );

  for (let td of secondColumnElement) {
    if (td.textContent == emailElement) {
      let row = td.parentNode;
      row.parentNode.removeChild(row);
      document.getElementById("result").textContent = "Deleted";
      return;
    }
    document.getElementById("result").textContent = "Not found";
  }
}
// Write a program that takes an e-mail from an input field and deletes the matching row from a table.
// The textContent in the element with id=&quot;result&quot; must be set to &quot;Deleted&quot;.
// If no entry is found, an error should be displayed in a &lt;div&gt; with ID &quot;results&quot;.
// The error should be &quot;Not found.&quot; Submit only the deleteByEmail() function in judge.
