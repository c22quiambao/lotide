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

// Function to count letters
const countLetters = function (inputString){
  //clean the string and convert into an array
  const cleanedString = inputString.replace(/[^\w]/g, '');
  const letterArray = cleanedString.split('').map(function(n) {
    return n;});

  //create object to hold key value pair of letters
  const letters = {};

  //loop through the array
  letterArray.forEach((x) => {
    letters[x] = (letters[x] || 0) + 1;
  });
  return letters;
}

//Test
const string1 = countLetters("apple crumble!");
console.log("object of the letters counted",string1);
assertEqual(string1['a'], 1);
assertEqual(string1['p'], 2);
assertEqual(string1['l'], 2);
assertEqual(string1['e'], 2);
assertEqual(string1['c'], 1);
assertEqual(string1['r'], 1);
assertEqual(string1['u'], 1);
assertEqual(string1['m'], 1);
assertEqual(string1['b'], 1);
