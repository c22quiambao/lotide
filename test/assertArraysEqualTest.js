//Import needed functions
const assertArraysEqual = require('../assertArraysEqual');

//Test Cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);  //should return true
assertArraysEqual([1, 2, 3], [3, 2, 1]);  //should return false
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); //should return true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]);  //should return false
assertArraysEqual([1, 2, 3], [1, 2, 3,4]);  //should return false