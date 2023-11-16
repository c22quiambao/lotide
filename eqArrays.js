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

const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {
// Iterate over the indices of one array (assuming both arrays have the same length)
  for (let i = 0; i < arr1.length; i++) {
    const element1 = arr1[i];
    const element2 = arr2[i];
    if (element1 !== element2){
    return false;
    }
  } return true;
} else {
  return false;
}
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),true); // => false