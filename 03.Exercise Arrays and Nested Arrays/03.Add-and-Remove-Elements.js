function solve(arr) {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "add") {
      res[i] = i + 1;
    } else if (arr[i] === "remove") {
      res.pop(i);
    }
  }
  if (res.length <= 0) {
    console.log("Empty");
  }
  for (let i = 0; i < res.length; i++) {
    if (res[i] === undefined || res[i] == "") {
    } else {
      console.log(res[i]);
    }
  }
}
solve(["add", "add", "add", "add"]);

// Write a JS function that adds and removes numbers to / from an array. You will receive a command which
// can either be &quot;add&quot; or &quot;remove&quot;.
// The initial number is 1. Each input command should increase that number, regardless of what it is.
// Upon receiving an &quot;add&quot; command you should add the current number to your array.
// Upon receiving the &quot;remove&quot; command you should remove the last entered number, currently existent in
// the array.
// The input comes as an array of strings. Each element holds a command.
// The output is the element of the array, each printed on a new line. In case of an empty array, just print
// &quot;Empty&quot;.
