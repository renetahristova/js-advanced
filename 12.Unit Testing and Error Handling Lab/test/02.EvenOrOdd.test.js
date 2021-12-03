const { expect } = require("chai");
const isOddOrEven = require("../02.EvenOrOdd");

describe("Even or Odd", () => {
  it("Returns undefined", () => {
    expect(isOddOrEven(1)).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven([])).to.be.undefined;
  });

  it("Returns Even", () => {
    expect(isOddOrEven("")).to.equal("even");
    expect(isOddOrEven("asdf")).to.equal("even");
  });

  it("Returns Odd", () => {
    expect(isOddOrEven("asd")).to.equal("odd");
  });
});
