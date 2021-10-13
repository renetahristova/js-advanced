function extract(content) {
  let text = document.getElementById("content");
  return text.innerHTML
    .match(/(?!\()[\w*\s*\d*]*(?=\))/gm)
    .filter((x) => x != "")
    .join("; ");
}

// Write a JS function that when executed, extracts all parenthesized text from a target paragraph by given element ID.
// The result is a string, joined by &quot;; &quot; (semicolon, space).
