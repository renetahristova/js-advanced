class Point {
  constructor(x, y) {
    this.x = Number(x);
    this.y = Number(y);
  }

  static distance(first, second) {
    return Math.sqrt(
      Math.pow(second.x - first.x, 2) + Math.pow(second.y - first.y, 2)
    );
  }
}
// let p1 = new Point(5, 5);
// let p2 = new Point(9, 8);

// Write a JS class that represents a Point. It has x and y coordinates as properties, that are set through the
// constructor, and a static method for finding the distance between two points, called distance().
