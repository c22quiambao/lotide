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

// FUNCTION IMPLEMENTATION assertEqual
const assertEqual = function(actual, expected) {
  // values matching
  if (actual === expected) {
    console.log(`😊😊😊  Assertion Passed: ${actual} === ${expected}`);
  } else {
    // Values not matching
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION eqObjects
const eqObjects = function(object1, object2) {

  // convert object's keys into an array
  const obj1KeysArr = Object.keys(object1);
  const obj2KeysArr = Object.keys(object2);
  
  // check if created arrays are equal
  if (obj1KeysArr.length !== obj2KeysArr.length) {
    console.log("checking length");
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
      eqArrays(object1[key1],object2[key1]);
    } else {
      //check if the primitive element is NOT equal to
      if (object1[key1] !== object2[key1]) {
        return false;
      }
    }
  }
  return true;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

console.log("------TC1--------");
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);

console.log("------TC 2---------");
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);

console.log("-------TC 3 --------");
const specialShirtObject = { size: "medium", material: "cotton" };
assertEqual(eqObjects(shirtObject , specialShirtObject), false);

console.log("-------TC 4--------");
const colorShirtObject = { size: "medium", color: "blue" };
assertEqual(eqObjects(shirtObject , colorShirtObject), false);

console.log("-------TC 5*******--------");
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject), true); // => true

console.log("-------TC 6 --------");
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject), false);
