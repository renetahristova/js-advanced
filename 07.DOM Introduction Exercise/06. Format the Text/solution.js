function solve() {
  let textAreaElement = document.getElementById("input");
  let text = textAreaElement.value;
  let sentences = text
    .split(".")
    .filter((x) => x !== "")
    .map((x) => x + ".");

  let paragraphRoof = Math.ceil(sentences.length / 3);

  let resultDiv = document.getElementById("output");
  for (let index = 0; index < paragraphRoof; index++) {
    resultDiv.innerHTML += `<p>${sentences.splice(0, 3).join("")}</p>`;
  }
}

// Create functionality that gets text from textarea, formats the given text - you need to find out how many
// sentences there are in the text, simply split the whole text by &#39;.&#39;
// Also, every sentence must have at least 1 character.
// Generate HTML paragraphs as a string (Use interpolation string to create paragraph element:{text}
// &lt;/p&gt;`) and append it to the div with an id = &quot;output&quot;.
