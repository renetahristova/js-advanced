const { expect } = require("chai");
const lookupChar = require("../03.CharLookup");

describe("Char Lookup", () => {
  it("Returns undefined", () => {
    expect(lookupChar(2, 2)).to.be.undefined;
    expect(lookupChar("test", "2")).to.be.undefined;
    expect(lookupChar("test", 1.2)).to.be.undefined;
  });
  it("Returns Incorrect index", () => {
    expect(lookupChar("test", 10)).to.equal("Incorrect index");
    expect(lookupChar("test", -10)).to.equal("Incorrect index");
  });
  it("Returns Correct index", () => {
    expect(lookupChar("test", 1)).to.equal("e");
  });
});
