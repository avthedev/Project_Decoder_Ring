// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    const abcIndex = "abcdefghijklmnopqrstuvwxyz";

    // Testing for missing values
    if (!input || !alphabet) return false;
    // Testing if parameter does not reach 26 characters
    if (alphabet.length !== 26) return false;
    // Caps ignored
    const aString = input.toLowerCase();
    let result = "";
    // Testing for unique characters else false
    const uniqueArray = [];
    for (let letters in alphabet) {
      if (uniqueArray.indexOf(alphabet[letters]) < 0) {
        uniqueArray.push(alphabet[letters]);
      } else {
        return false;
      }
    }
    // Loop through input's string
    for (let i = 0; i < aString.length; i++) {
      // Space maintained
      if (aString[i] === " ") {
        result += " ";
      } else {
        let alphaIndex = abcIndex;
        let abc = alphabet;
        // If decoding swap vars and loop through alpha
        if (!encode) {
          alphaIndex = alphabet;
          abc = abcIndex;
        }
        // encoding : loop through index alphabet
        for (let j = 0; j < alphaIndex.length; j++) {
          if (aString[i] === alphaIndex[j]) {
            result += abc[j];
          }
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
