// Import needed functions
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

// Test Cases

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]),true); // should be equal to true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]),false); // should be equal to false
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true); // should be equal to true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // should be equal to false