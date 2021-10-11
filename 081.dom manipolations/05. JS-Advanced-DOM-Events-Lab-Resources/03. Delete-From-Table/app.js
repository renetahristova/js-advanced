function deleteByEmail() {
    let emailElement = document.getElementsByName('email')[0].value;
    let secondColumnElement = document.querySelectorAll('#customers tr td:nth-child(2)');

    for (let td of secondColumnElement) {
     if (td.textContent == emailElement) {
         let row = td.parentNode;
         row.parentNode.removeChild(row);
        document.getElementById('result').textContent = 'Deleted';
        return;      
     }   
     document.getElementById('result').textContent = 'Not found';
    }
}