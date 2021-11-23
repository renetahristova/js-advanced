const { expect } = require("chai");
const isSymmetric = require("../05.Check-for-Symmetry");

describe("Symmetry Test", () => {
  it("Return true if the input array is symmetric", () => {
    expect(isSymmetric([1, 2, 2, 1])).to.be.true;
  });
  it("Return false for any input that isn’t of the correct type", () => {
    expect(isSymmetric(5)).to.be.false;
  });
  it("Return false for non-symmetric array", () => {
    expect(isSymmetric([1, 2, 3])).to.be.false;
  });
  it("Return false for different data type ", () => {
    expect(isSymmetric([1, 2, "2", 1])).to.be.false;
  });
});
