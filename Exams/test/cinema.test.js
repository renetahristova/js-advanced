const { expect } = require("chai");
const cinema = require("../cinema");

describe("Cinema", () => {
  describe("Show Movies", () => {
    it("Returns There are currently no movies to show if input is zero", () => {
      expect(cinema.showMovies([])).to.equal(
        "There are currently no movies to show."
      );
    });
    it("Returns Movie List", () => {
      expect(
        cinema.showMovies(["King Kong", "The Tomorrow War", "Joker"])
      ).to.equal("King Kong, The Tomorrow War, Joker");
    });
  });

  describe("Ticket price", () => {
    it("Submitted projection Type is present in the schedule with the types of projections", () => {
      expect(cinema.ticketPrice("Premiere")).to.equal(12);
      expect(cinema.ticketPrice("Normal")).to.equal(7.5);
      expect(cinema.ticketPrice("Discount")).to.equal(5.5);
    });
    it("Invalid projection type.", () => {
      expect(() => cinema.ticketPrice("test")).to.throw();
      expect(() => cinema.ticketPrice([])).to.throw();
      expect(() => cinema.ticketPrice({})).to.throw();
    });
  });
  describe("Seats Change", () => {
    it("Unsuccessful change of seats in the hall", () => {
      expect(cinema.swapSeatsInHall(1.5, 2)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(25, 3)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(0, 1)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(-1, 1)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall("one", 1)).to.equal(
        "Unsuccessful change of seats in the hall."
      );
    });
    it("Successful Change", () => {
      expect(cinema.swapSeatsInHall(1, 2)).to.equal(
        "Successful change of seats in the hall."
      );
      expect(cinema.swapSeatsInHall(19, 20)).to.equal(
        "Successful change of seats in the hall."
      );
    });
  });
});
