// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar Shift", () => {
  it("Should return a string that is encoded", () => {
    const expected = "wklqnixo";
    const actual = caesar("Thinkful", 3);
    expect(actual).to.eql(expected);
  });
  it("Should return a string that is decoded", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.eql(expected);
  });
  it("Should encoded message: This is a secret message!", () => {
    const expected = "this is a secret message!";
    const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    expect(actual).to.eql(expected);
  });
  it("Should decode a message: BPQA qa I amkzmb umaaiom!", () => {
    const expected = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
    const actual = "this is a secret message!";
    expect(actual).to.eql(expected);
  });
});
