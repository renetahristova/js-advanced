function toggle() {
   // console.log('TODO:...');
   let buttonElement = document.getElementsByClassName('button')[0];
   let textElement = document.getElementById('extra');

   if (buttonElement.innerHTML === 'More') {
       buttonElement.innerHTML = 'Less';
       textElement.style.display = 'block';
   } else{
       buttonElement.innerHTML = 'More';
       textElement.style.display = 'none';
   }

}