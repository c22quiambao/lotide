const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      const element1 = arr1[i];
      const element2 = arr2[i];
      if (element1 !== element2) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  const isItEqual = eqArrays(actual,expected);
  if (isItEqual) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const without = function(source, itemsToRemove) {
  const uniqueElements = [];

  for (const element of source) {
    if (!itemsToRemove.includes(element)) {
      uniqueElements.push(element);
    }
  }
  return uniqueElements;
};


//TC 1
let arrayA = [-2, -1, 1, 2, 3, 4, 5];
let newArray1 = without(arrayA, [1, 2,]);
console.log("TC 1 NewArray:", newArray1); // Output: [ -2, -1, 3, 4, 5 ]
assertArraysEqual(newArray1, [ -2, -1, 3, 4, 5 ]); // Passed
assertArraysEqual(arrayA, [-2, -1, 1, 2, 3, 4, 5]); // Passed

// TC 2
let arrayB = ["1", "2", "3"];
let newArray2 = without(arrayB, [1, 2,"3"]);
console.log("TC 2 NewArray:", newArray2); // Output: [ -2, -1, 3, 4, 5 ]
assertArraysEqual(newArray2, ["1", "2"]); // Passed
assertArraysEqual(arrayB, ["1", "2", "3"]); // Passed

// TC 3

let arrayC = ["star","moon","commets","clouds"];
let newArray3 = without(arrayC, ["moon"]);
console.log("TC 3 NewArray:", newArray3); // Output: [ -2, -1, 3, 4, 5 ]
assertArraysEqual(newArray3, ["star","commets","clouds"]); // Passed
assertArraysEqual(arrayC, ["star","moon","commets","clouds"]); // Passed