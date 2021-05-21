// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Square", () => {
  it("should return a encoded message", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.eql(expected);
  });
  it("should return a decoded message", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.eql(expected);
  });
  it("Capital letters should be ignored", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello World");
    expect(actual).to.eql(expected);
  });
  it("Spaces maintained", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.eql(expected);
  });
});
