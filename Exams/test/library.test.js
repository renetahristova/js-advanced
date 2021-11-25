const { expect } = require("chai");
const library = require("../library");

describe("Library", () => {
  describe("Calculate Price of Book", () => {
    it("Returns Invalid input", () => {
      expect(() => library.calcPriceOfBook("test", "test")).to.throw();
      expect(() => library.calcPriceOfBook("test", 1.5)).to.throw();
      expect(() => library.calcPriceOfBook(1948, 1999)).to.throw();
    });
    it("Returns price of book if year < 1980", () => {
      expect(library.calcPriceOfBook("name", 1970)).to.equal(
        "Price of name is 10.00"
      );
      expect(library.calcPriceOfBook("name", 1980)).to.equal(
        "Price of name is 10.00"
      );
    });
    it("Returns price of book if year > 1980", () => {
      expect(library.calcPriceOfBook("name", 1990)).to.equal(
        "Price of name is 20.00"
      );
    });
  });
  describe("Find book", () => {
    it("Input Array = 0", () => {
      expect(() => library.findBook([])).to.throw();
    });
    it("Returns the founded book", () => {
      expect(library.findBook(["name"], "name")).to.equal(
        "We found the book you want."
      );
    });
    it("Returns book is not found", () => {
      expect(library.findBook(["name"], "asd")).to.equal(
        "The book you are looking for is not here!"
      );
    });
  });
  describe("Arrange The Books", () => {
    it("Throw error if the input is invalid", () => {
      expect(() => library.arrangeTheBooks(1.5)).to.throw();
      expect(() => library.arrangeTheBooks(-1)).to.throw();
    });
    it("The books are arenged", () => {
      expect(library.arrangeTheBooks(10)).to.equal(
        "Great job, the books are arranged."
      );
    });
    it("More shelves needed", () => {
      expect(library.arrangeTheBooks(50)).to.equal(
        "Insufficient space, more shelves need to be purchased."
      );
    });
  });
});
