function solve() {
  let outputElement = document.getElementById('output')
  let inputElement = document.getElementById('input').innerText;

  let sentences = inputElement.split('.');
  let paragraph = document.createElement('p');

  let counter = 0;

  for (let i = 0; i < sentences.length; i++) {
    paragraph.innerText += sentences[i];
    counter++

    if (counter === 3 || i === sentences.length-1 ) {
      outputElement.appendChild(paragraph);
        paragraph = document.createElement('p');
        counter = 0
    }
    
  }

}