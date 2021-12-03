const { expect } = require("chai");
const mathEnforcer = require("../04.MathEnforcer");

describe("MathEnforcer", () => {
  describe("Add Five", () => {
    it("Returns Undefined if parameter is not a number", () => {
      expect(mathEnforcer.addFive("5")).to.be.undefined;
      expect(mathEnforcer.addFive({})).to.be.undefined;
      expect(mathEnforcer.addFive([])).to.be.undefined;
      expect(mathEnforcer.addFive(undefined)).to.be.undefined;
    });

    it("Returns correct answear", () => {
      expect(mathEnforcer.addFive(5)).to.equal(10);
      expect(mathEnforcer.addFive(-10)).to.equal(-5);
      expect(mathEnforcer.addFive(5.05)).to.closeTo(10.05, 0.01);
    });
  });
  describe("Subtract Ten", () => {
    it("Returns Undefined if parameter is not a number", () => {
      expect(mathEnforcer.subtractTen("5")).to.be.undefined;
      expect(mathEnforcer.subtractTen({})).to.be.undefined;
      expect(mathEnforcer.subtractTen([])).to.be.undefined;
      expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
    });

    it("Returns correct answear", () => {
      expect(mathEnforcer.subtractTen(20)).to.equal(10);
      expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
      expect(mathEnforcer.subtractTen(5.05)).to.closeTo(-4.95, 0.01);
    });
  });

  describe("Sum", () => {
    it("Returns Undefined if parameter is not a number", () => {
      expect(mathEnforcer.sum("5", 5)).to.be.undefined;
      expect(mathEnforcer.sum(5, "5")).to.be.undefined;
      expect(mathEnforcer.sum("5", "5")).to.be.undefined;
      expect(mathEnforcer.sum([1, 2])).to.be.undefined;
    });
    it("Returns correct answear", () => {
      expect(mathEnforcer.sum(5, 5)).to.equal(10);
      expect(mathEnforcer.sum(20, -10)).to.equal(10);
      expect(mathEnforcer.sum(-10, -10)).to.equal(-20);
      expect(mathEnforcer.sum(5.05, 5)).to.closeTo(10.05, 0.01);
    });
  });
});
