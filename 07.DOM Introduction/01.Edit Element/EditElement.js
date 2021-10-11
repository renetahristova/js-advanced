function editElement(ref, match, replacer) {
    let content = ref.textContent;
    let mather = new RegExp(match, 'g');
    let edited = content.replace(mather, replacer);
    ref.textContent = edited;
}

/*First parameter is a reference to an HTML element, other two parameters are string – match and replacer.
You have to replace all occurrences of match inside the text content of the given elements with replacer. */