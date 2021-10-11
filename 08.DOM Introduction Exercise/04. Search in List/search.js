function search() {
   let searchElement = document.getElementById('searchText');
   let listElements = Array.from(document.querySelectorAll('#towns li'));

   let searchText = searchElement.value;
   listElements.forEach(el => {
      el.style.fontWeight = 'normal';
      el.style.textDecoration = 'none';
   });

   let filterList = listElements
   .filter(x => x.textContent.includes(searchText));
   //console.log(listElements.map(x => x.textContent));
   let mapList = filterList.forEach(x => {
      x.style.fontWeight = 'bold';
      x.style.textDecoration = 'underline';
   });

   let resultDiv = document.getElementById('result');
   resultDiv.textContent = `${filterList.length} matches found`;
}
