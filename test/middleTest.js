//Import functions needed
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//Test Cases
// Test Scenario 1 Odd elements
console.log("Odd Elements TC");
const oddArr1 = middle([1, 2, 3]);
assertArraysEqual(oddArr1, [2]);  // should return true
const oddArr2 = middle([1, 2, 3, 4, 5]);
assertArraysEqual(oddArr2, [3]);  // should return true
const oddArr3 = middle([1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(oddArr3, [4]);  // should return true
const oddArr4 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArraysEqual(oddArr4, [5]);  // should return true
const oddArr5 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
assertArraysEqual(oddArr5, [6]);  // should return true

// Test Scenario 2 Even elements
console.log("Even Elements TC");
const evenArr1 = middle([1, 2, 3, 4]);
assertArraysEqual(evenArr1, [2, 3]);  // should return true
const evenArr2 = middle([1, 2, 3, 4, 5, 6,]);
assertArraysEqual(evenArr2, [3, 4]);  // should return true
const evenArr3 = middle([1, 2, 3, 4, 5, 6, 7, 8,]);
assertArraysEqual(evenArr3, [4,5]);  // should return true
const evenArr4 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); 
assertArraysEqual(evenArr4, [5,6]);  // should return true
const evenArr5 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
assertArraysEqual(evenArr5, [6,7]);  // should return true

// Test Scenario0 3 Special arrays
console.log("Special Array TC");
const spclArr1 = middle([]); // Empty Arrays
assertArraysEqual(spclArr1, []);  // should return true
const spclArr2 = middle([1]); // 1 Array element
assertArraysEqual(spclArr2, []);  // should return true

const spclArr3 = middle([1,2]); // 2 Array element
assertArraysEqual(spclArr3, []); // should return true