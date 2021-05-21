// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    // Testing for missing values or conditional values
    if (!input || !shift || shift < -25 || shift > 25 || shift === 0)
      return false;
    // Caps ignored
    let string = input.toLowerCase();
    let result = "";
    // loop through input then alphabet
    for (let i = 0; i < string.length; i++) {
      for (let j = 0; j < alphabet.length; j++) {
        // space maintained
        if (!alphabet.includes(string[i])) {
          result += string[i];
          break;
        }
        if (alphabet[j] === string[i]) {
          // condition for en/de code
          let offset = j + shift;
          if (!encode) offset = j - shift;
          // letters should wrap around after being shifted off
          if (offset < 0) {
            offset += alphabet.length;
            result += alphabet[offset];
          } else if (offset > alphabet.length - 1) {
            offset -= alphabet.length;
            result += alphabet[offset];
          } else result += alphabet[offset];
        }
      }
    }
    return result;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

// A B C D E
