function JsonToHtmlTable(json) {
  let arr = JSON.parse(json);
  let outputArr = ["<table>"];

  outputArr.push(makeKeyRow(arr));

  arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

  outputArr.push("</table>");

  function makeKeyRow(arr) {
    let result = "  <tr>";
    Object.keys(arr[0]).forEach((key) => {
      result += `<th>${escapeHtml(key)}</th>`;
    });
    result += "</tr>";
    return result;
  }

  function makeValueRow(obj) {
    let result = "  <tr>";
    Object.values(obj).forEach((value) => {
      result += `<td>${escapeHtml(value)}</td>`;
    });
    result += "</tr>";
    return result;
  }

  function escapeHtml(value) {
    return value
      .toString()
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  console.log(outputArr.join("\n"));
}

// You’re tasked with creating an HTML table of students and their scores. You will receive a single string
//representing an array of objects, the table’s headings should be equal to the object’s keys, while each
//object’s values should be a new entry in the table. Any text values
//in an object should be escaped, in order to avoid introducing dangerous code into the HTML
