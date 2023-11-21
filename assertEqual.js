// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
// values matching
  if (actual === expected) {
    console.log(`😊😊😊  Assertion Passed: ${actual} === ${expected}`);
  } else {
    // Values not matching
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};


module.exports = assertEqual;
