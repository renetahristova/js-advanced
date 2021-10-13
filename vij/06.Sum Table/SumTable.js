function sumTable() {
    let tableElement = document.querySelectorAll("table tr");
    let total = 0;
    
    for (let i = 1; i < tableElement.length; i++) {
    
    let cols = tableElement[i].children;
    let cost = cols[cols.length - 1].textContent;
    
    total += Number(cost); 
    }
      document.getElementById("sum").textContent = total;
}