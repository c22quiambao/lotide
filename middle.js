//Array element checking FUNCTION
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

//Assertion FUNCTION
const assertArraysEqual = function(actual, expected) {
  const isItEqual = eqArrays(actual,expected);
  if (isItEqual) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//middle FUNCTION
const middle = function(array) {
  let midArr = [];
  if (array.length <= 2) {
    return midArr;
  }
  if (array.length % 2 === 0) {
    let middPosB = array.length / 2;
    let middPosA = middPosB - 1;
    midArr.push(array[middPosA]);
    midArr.push(array[middPosB]);
    return midArr;
  }
  if (array.length % 2 !== 0) {
    let middPos = Math.floor(array.length / 2);
    midArr.push(array[middPos]);
    return midArr;
  }
};


// Test Scenario 1 Odd elements
console.log("Odd Elements TC");
const oddArr1 = middle([1, 2, 3]);
assertArraysEqual(oddArr1, [2]);
const oddArr2 = middle([1, 2, 3, 4, 5]);
assertArraysEqual(oddArr2, [3]);
const oddArr3 = middle([1, 2, 3, 4, 5, 6, 7]);
assertArraysEqual(oddArr3, [4]);
const oddArr4 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArraysEqual(oddArr4, [5]);
const oddArr5 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
assertArraysEqual(oddArr5, [6]);

// Test Scenario 2 Even elements
console.log("Even Elements TC");
const evenArr1 = middle([1, 2, 3, 4]);
assertArraysEqual(evenArr1, [2, 3]);
const evenArr2 = middle([1, 2, 3, 4, 5, 6,]);
assertArraysEqual(evenArr2, [3, 4]);
const evenArr3 = middle([1, 2, 3, 4, 5, 6, 7, 8,]);
assertArraysEqual(evenArr3, [4,5]);
const evenArr4 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assertArraysEqual(evenArr4, [5,6]);
const evenArr5 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
assertArraysEqual(evenArr5, [6,7]);

// Test Scenario0 3 Special arrays
console.log("Special Array TC");
const spclArr1 = middle([]); // Empty Arrays
assertArraysEqual(spclArr1, []);
const spclArr2 = middle([1]); // 1 Array element
assertArraysEqual(spclArr2, []);
const spclArr3 = middle([1,2]); // 2 Array element
assertArraysEqual(spclArr3, []);