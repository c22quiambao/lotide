// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {   // values matching
    console.log(`😊😊😊  Assertion Passed: ${actual} === ${expected}`);
  } else { // Values not matching
    console.log(`😡😡😡 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//function to get head of the array
const head = function(arrayPassed) {
  if (Array.isArray(arrayPassed) === false) {
    return undefined;
  }
  const firstElement = arrayPassed.shift();
  return firstElement;
};

  
// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([1,2,3]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Jude"]), "Hello");
assertEqual(head(), "Hello");