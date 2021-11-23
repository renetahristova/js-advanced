const { expect } = require("chai");
const rgbToHexColor = require("../06.RGB-to-Hex");

describe("RGB to Hex", () => {
  it("Converts black", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });
  it("Converts white", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });
  it("Converts red", () => {
    expect(rgbToHexColor(245, 66, 66)).to.equal("#F54242");
  });

  describe("Invalid parameters", () => {
    it("Return undefined for missing parameter", () => {
      expect(rgbToHexColor(255, 255)).to.be.undefined;
    });
    it("Return undefined for parameter out of range", () => {
      expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
    });
    it("Return undefined for parameter out of range", () => {
      expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
    });
    it("Return undefined for invalid parameter", () => {
      expect(rgbToHexColor("255", "255", "255")).to.be.undefined;
    });
  });
});
