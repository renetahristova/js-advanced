const { expect } = require("chai");
const createCalculator = require("../07.Add-Subtract");

describe("Add/Subtract", () => {
  let instance = null;

  beforeEach(() => {
    instance = createCalculator();
  });

  it("Method check", () => {
    expect(instance).to.has.ownProperty("add");
    expect(instance).to.has.ownProperty("subtract");
    expect(instance).to.has.ownProperty("get");
  });

  it("empty start", () => {
    expect(instance.get()).to.equal(0);
  });
  it("Add number", () => {
    //new instance
    instance.add(1);
    expect(instance.get()).to.equal(1);
  });

  it("Add numbers", () => {
    //new instance
    instance.add(1);
    instance.add(2);
    expect(instance.get()).to.equal(3);
  });

  it("Subtract number", () => {
    //new instance
    instance.subtract(1);
    expect(instance.get()).to.equal(-1);
  });

  it("Subtract numbers", () => {
    //new instance
    instance.subtract(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-3);
  });
  it("Add and Subtract numbers", () => {
    //new instance
    instance.add(1);
    instance.subtract(2);
    expect(instance.get()).to.equal(-1);
  });

  it("String numbers", () => {
    //new instance
    instance.add("1");
    instance.add("2");
    instance.subtract("4");
    expect(instance.get()).to.equal(-1);
  });
});

// Return a module (object), containing the functions add(), subtract() and get() as
// properties
//  Keep an internal sum which can’t be modified from the outside
//  The functions add() and subtract() take a parameter that can be parsed as a number (either a
// number or a string containing a number) that is added or subtracted from the internal sum
//  The function get() returns the value of the internal sum
