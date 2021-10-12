function solve() {
  //TODO...
  let inputElement = document.querySelector("#text");
  let currentCaseElement = document.querySelector("#naming-convention");

  let text = inputElement.value;
  let namingConvention = currentCaseElement.value;

  let result = applyNamingConvention(text, namingConvention);

  let spanElement = document.getElementById("result");
  spanElement.textContent = result;

  function applyNamingConvention(text, convention) {
    const conventionSwitch = {
      "Pascal Case": () =>
        text
          .toLowerCase()
          .split(" ")
          .map((x) => x[0].toUpperCase() + x.slice(1))
          .join(""),
      "Camel Case": () =>
        text
          .toLowerCase()
          .split(" ")
          .map((x, i) => (x = i !== 0 ? x[0].toUpperCase() + x.slice(1) : x))
          .join(""),
      default: () => "Error!",
    };
    return (conventionSwitch[convention] || conventionSwitch.default)();
  }
}

// An html file is given and your task is to write a function that takes two string parameters as an input and transform
// the first parameter to the type required by the second parameter.
// The first parameter will be the text that you need to modify depending on the second parameter. The
// words in it will always be separated by space.
// The second parameter will be either Camel Case or Pascal Case In case of a different input, you
// your output should be &quot;Error!&quot;
// When the button is clicked the function should convert the first string to either of the cases. The output should
// consist of only one word - the string you have modified. Once your output is done, you should set it as a HTML to
// the &lt;span&gt; element.
