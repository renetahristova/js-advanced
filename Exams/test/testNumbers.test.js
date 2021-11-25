const { expect } = require("chai");
const testNumbers = require("../testNumbers");

describe("Test Numbers", () => {
  describe("Sum numbers", () => {
    it("Parameters are NOT nums", () => {
      expect(testNumbers.sumNumbers("1", 1)).to.be.undefined;
      expect(testNumbers.sumNumbers(1, "1")).to.be.undefined;
      expect(testNumbers.sumNumbers([1, 1])).to.be.undefined;
    });
    it("Parameters are nums", () => {
      expect(testNumbers.sumNumbers(1.1, 2)).to.equal("3.10");
      expect(testNumbers.sumNumbers(1, -1)).to.equal("0.00");
      expect(testNumbers.sumNumbers(1, -1)).to.equal("0.00");
      expect(testNumbers.sumNumbers(-10, -5)).to.equal("-15.00");
    });
  });
  describe("Number Checker", () => {
    it("Even number", () => {
      expect(testNumbers.numberChecker("2")).to.equal("The number is even!");
    });
    it("Odd number", () => {
      expect(testNumbers.numberChecker("3")).to.equal("The number is odd!");
    });
    it("Input is not a number ", () => {
      expect(() => testNumbers.numberChecker("asd")).to.Throw();
    });
  });
  describe("Average Sum Array", () => {
    it("Returns the sum of arr", () => {
      expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
      expect(testNumbers.averageSumArray([1])).to.equal(1);
      expect(testNumbers.averageSumArray([0])).to.equal(0);
    });
  });
});
