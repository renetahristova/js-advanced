function editElement(ref, match, replacer) {
  const content = ref.textContent;

  const matcher = new RegExp(match, "g");

  const edited = content.replace(matcher, replacer);

  ref.textContent = edited;
}

// First parameter is a reference to an HTML element, other two parameters are string – match and replacer.
// You have to replace all occurrences of match inside the text content of the given elements with replacer.
