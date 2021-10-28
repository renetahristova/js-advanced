class Hex {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    return `0x${this.value.toString(16).toUpperCase()}`;
  }
  plus(num) {
    let result = this.value + Number(num.valueOf());
    return new Hex(result);
  }
  minus(num) {
    let result = this.value - Number(num.valueOf());
    return new Hex(result);
  }
  parse(text) {
    return parseInt(text, 16);
  }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(FF.parse("AAA"));
// Write a class Hex, having the following functionality:
//  The constructor takes one parameter value, which is a number
//  valueOf() This function should return the value property of the hex class.
//  toString() This function will show its hexadecimal value starting with 0x
//  plus({number}) This function should add a number or Hex object and return a new Hex object.
//  minus({number}) This function should subtract a number or Hex object and return a new Hex object.
//  parse({string}) Create a parse class method that can parse Hexidecimal numbers and convert them
// to standard decimal numbers.
