// FUNCTION IMPLEMENTATION
const eqArrays = function(arr1, arr2) {
// check array length is equal
  if (arr1.length === arr2.length) {
    // Iterate over the indices of one array (assuming both arrays have the same length)
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

module.exports = eqArrays;