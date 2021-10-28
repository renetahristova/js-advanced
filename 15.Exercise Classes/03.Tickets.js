function solve(arr, sortCr) {
  let tickets = [];
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  return arr
    .map((x) => {
      return new Ticket(...x.split("|").map((x) => Number(x) || x));
    })
    .sort((a, b) =>
      isNaN(a[sortCr])
        ? a[sortCr].localeCompare(b[sortCr])
        : a[sortCr] - b[sortCr]
    );
}
console.log(
  solve(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "destination"
  )
);
// Write a program that manages a database of tickets. A ticket has a destination, a price and a status. Your
// program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string,
// representing a sorting criterion. The ticket descriptions have the following format:
// <destinationName>|<price>|<status>
// Store each ticket and at the end of execution return a sorted summary of all tickets, sorted by either destination,
// price or status, depending on the second parameter that your program received. Always sort in ascending order
// (default behavior for alphabetical sort). If two tickets compare the same, use order of appearance
