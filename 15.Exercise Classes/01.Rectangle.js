class Rectangle {
  constructor(width, height, color) {
    this.width = Number(width);
    this.height = Number(height);
    this.color = String(color);
  }
  calcArea = () => {
    return this.width * this.height;
  };
}
let rect = new Rectangle(4, 5, "Red");
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

// Write a class Rectangle for a rectangle object. It needs to have a width (Number), height (Number) and color
// (String) properties, which are set from the constructor and a calcArea() method, that calculates and returns the
// rectangle’s area.
