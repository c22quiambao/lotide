//Import needed functions
const eqArrays = require('./eqArrays');

//Function Implementation
const assertArraysEqual = function(actual, expected) {
  const isItEqual = eqArrays(actual,expected);
  if (isItEqual) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;