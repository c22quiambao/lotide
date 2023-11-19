// FUNCTION IMPLEMENTATION eqArrays
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

// FUNCTION IMPLEMENTATION eqObjects
const eqObjects = function(object1, object2) {

  // convert object's keys into an array
  const obj1KeysArr = Object.keys(object1);
  const obj2KeysArr = Object.keys(object2);
  
  // check if created arrays are equal
  if (obj1KeysArr.length !== obj2KeysArr.length) {
    return false;
  }

  // check if arrays sorted have identical keys
  const areKeysEqual = obj1KeysArr.sort().join('') === obj2KeysArr.sort().join('');
  if (!areKeysEqual) {
    return false;
  }

  // loop through the array to get the corresponding object value needed
  for (let key1 of obj1KeysArr) {
    //check if the object value being checked is an array
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
      // call eqArrays to check array of values
      const arrayChecking = eqArrays(object1[key1],object2[key1]);
      if (!arrayChecking) {
        return false;
      }
    } else {
      //check if the primitive element is NOT equal to
      if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  const isItEqual = eqObjects(actual,expected);
  if (isItEqual) {
    console.log(`🥳🥳🥳 Assertion PASSED: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion FAILED: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


//Test Cases
console.log("----TC1-----");
assertObjectsEqual({size: 'medium', color: 'red'}, {color: 'red', size: 'medium'});
console.log("----TC2-----");
assertObjectsEqual({size: 'medium', color: 'red'}, { size: "medium", color: "red", sleeveLength: "long" });
console.log("----TC3-----");
assertObjectsEqual({size: 'medium', color: 'red'}, { size: "medium", material: "cotton" });
console.log("----TC4-----");
assertObjectsEqual({size: 'medium', color: 'red'}, { size: "medium", color: "blue" });
console.log("----TC5-----");
assertObjectsEqual({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "blue"]});
console.log("----TC6-----");
assertObjectsEqual({size: 'medium', color: 'red'}, { size: "medium", colors: ["red", "blue"], sleeveLength: "long" });
console.log("----TC7-----");
assertObjectsEqual({ colors: ["red", "blue"], size: "medium" }, { size: "medium", colors: ["red", "white"] });