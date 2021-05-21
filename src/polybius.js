// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const alphabet = {
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };
    // test missing values
    if (!input) return false;
    // caps ignored
    const strings = input.toLowerCase();
    let result = "";
    // method for encoding
    if (encode) {
      for (let i = 0; i < strings.length; i++) {
        let aString = strings[i];
        if (aString === " ") {
          result += " ";
        } else {
          let found = Object.entries(alphabet).find(
            (letter) => aString === letter[0]
          );
          result += found[1];
        }
      }
    } else {
      // if coordinates is not an even number return false and ignore space
      let removeSpace = input.replace(/ /g, "");
      if (removeSpace.length % 2 !== 0) {
        return false;
      }
    }
    // method for decoding and i + j
    for (let i = 0; i < strings.length; i += 2) {
      let decode = `${strings[i]}${strings[i + 1]}`;
      if (decode.includes(" ")) {
        result += " ";
        i -= 1;
      } else if (decode === "42") {
        result += "(i/j)";
      } else {
        let found = Object.entries(alphabet).find(
          (letter) => decode === letter[1]
        );
        if (found) {
          result += found[0];
        }
      }
    }
    return result.trimEnd();
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
