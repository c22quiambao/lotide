// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
// values matching
  if (actual === expected) {
    console.log("😊😊😊  Assertion Passed: " + actual + " === " + expected);
  }
  // Values not matching
  if (actual !== expected) {
    console.log("😡😡😡 Assertion Failed: " + actual + " !== " + expected);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(10, 1);
assertEqual(12, 1.1);
assertEqual(1.1, 1.1);
assertEqual(-7, -7);
assertEqual("CAI", "cai");
assertEqual("star", "star");
assertEqual("EARTH", "EARTH");
