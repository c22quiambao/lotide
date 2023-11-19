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
const findKey = function(object, callback) {

  // convert object to key's array
  const objKeysArr = Object.keys(object);
  // iterate over object
  for (let key of objKeysArr) {
    if (object[key] && callback(object[key])) {
      return key;
    }
  }
  return undefined;
};


//Tests
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2),"noma");


assertEqual(findKey({
  "Canada":        { stars: 1 },
  "Philippines":   { stars: 4 },
  "Hongkong":      { stars: 2 },
  "Guam":          { stars: 6 },
  "PuertoRico":    { stars: 2 },
  "USA":           { stars: 5 }
}, x => x.stars === 3),undefined);