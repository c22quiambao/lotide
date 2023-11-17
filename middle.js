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
  let length = array.length;
  if (array.length <= 2){
    return midArr;
  }
  if (array.length % 2 == 0){
    let middPosB = length / 2;
    let middPosA = middPosB - 1;
    midArr.push(array[middPosA]);
    midArr.push(array[middPosB]);
    return midArr;
  }
  if (array.length % 2 != 0) {
    let middPos = (length / 2);
    let index = Math.round(middPos) - 1;
    midArr.push(array[index]);
    return midArr;
  }
}


// Test Scenario 1 Odd elements
const oddArr1 = middle([1, 2, 3]);
console.log ("TS1TC1 middle elements:", oddArr1);
assertArraysEqual(oddArr1, [2]);
console.log ("------");
const oddArr2 = middle([1, 2, 3, 4, 5]);
console.log ("TS1TC2 middle elements:", oddArr2);
assertArraysEqual(oddArr2, [3]);
console.log ("------");
const oddArr3 = middle([1, 2, 3, 4, 5, 6, 7]);
console.log ("TS1TC3 middle elements:", oddArr3);
assertArraysEqual(oddArr3, [4]);
console.log ("------");
const oddArr4 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log ("TS1TC4 middle elements:", oddArr4);
assertArraysEqual(oddArr4, [5]);
console.log ("------");
const oddArr5 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
console.log ("TS1TC5 middle elements:", oddArr5);
assertArraysEqual(oddArr5, [6]);
console.log ("------");

// Test Scenario 2 Even elements
const evenArr1 = middle([1, 2, 3, 4]);
console.log ("TS2TC1 middle elements:", evenArr1);
assertArraysEqual(evenArr1, [2, 3]);
console.log ("------");
const evenArr2 = middle([1, 2, 3, 4, 5, 6,]);
console.log ("TS2TC2 middle elements:",evenArr2);
assertArraysEqual(evenArr2, [3, 4]);
console.log ("------");
const evenArr3 = middle([1, 2, 3, 4, 5, 6, 7, 8,]);
console.log ("TS2TC3 middle elements:",evenArr3);
assertArraysEqual(evenArr3, [4,5]);
console.log ("------");
const evenArr4 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log ("TS2TC4 middle elements:",evenArr4);
assertArraysEqual(evenArr4, [5,6]);
console.log ("------");
const evenArr5 = middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log ("TS2TC5 middle elements:",evenArr5);
assertArraysEqual(evenArr5, [6,7]);
console.log ("------");

// Test Scenario0 3 Special arrays
const spclArr1 = middle([]); // Empty Arrays
console.log ("TS3TC1 middle elements:",spclArr1);
assertArraysEqual(spclArr1, []);
console.log ("------");
const spclArr2 = middle([1]); // 1 Array element
console.log ("TS3TC2 middle elements:",spclArr2);
assertArraysEqual(spclArr1, []);
console.log ("------");
const spclArr3 = middle([1,2]); // 2 Array element
console.log ("TS3TC3 middle elements:",spclArr3);
assertArraysEqual(spclArr3, []);
console.log ("------");