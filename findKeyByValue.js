// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  // values matching
  if (actual === expected) {
    console.log(`😊😊😊  Assertion Passed: ${actual} === ${expected}`);
  } else {
    // Values not matching
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Implement function
const findKeyByValue = function(inputObject, inputValue) {

  // convert object to key's array
  const objKeysArr = Object.keys(inputObject);

  // iterate over object
  for (let valtoSearch of objKeysArr) {
    if (inputObject[valtoSearch] === inputValue) {
      return `${valtoSearch}`;
    }
  }
  return undefined;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


//Tests
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);