// assertEqual FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {   // values matching
    console.log(`😊😊😊  Assertion Passed: ${actual} === ${expected}`);
  } else { // Values not matching
    console.log(`😡😡😡  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(passedArray) { //function to get tail of the array
  //console.log("passedArray " , passedArray);
  const newArray = [];
  //console.log("Initial newArray " , newArray);
  for (let i = 1; i <= passedArray.length - 1; i++) {
    //console.log('index', i, 'element:', passedArray[i]);
    newArray.push(passedArray[i]);
    //console.log("newArray " , newArray);
  }
  if (newArray.length <= 0) {
    //console.log('checking for length');
    return null;
  }
  return newArray;
    
};
  
    
  
// Test Case 1
const fruits = ["apple","banana","orange"];
let arr = tail(fruits);
//console.log("original array:" , fruits);
//console.log("new array:", arr);
assertEqual(arr.length, 2); // ensure we get back two elements
assertEqual(fruits.length, 3); // ensure we get back the original three elements
assertEqual(arr[0], "banana"); // ensure first element is "banana"
assertEqual(arr[1], "orange"); // ensure second element is "Orange"

// Test Case 2
const numbers = [5,4,3,2,1];
let arr1 = tail(numbers);
//console.log("original array:" , numbers);
//console.log("new array:", arr1);
assertEqual(arr1.length, 4); // ensure we get back 4 elements
assertEqual(numbers.length, 5); // ensure we get back 5 elements
assertEqual(arr1[0], 4); // ensure first element is 4
assertEqual(arr1[1], 3); // ensure second element is 3
assertEqual(arr1[2], 2); // ensure second element is 2
assertEqual(arr1[3], 1); // ensure second element is 1 */

// Test Case 3
const letter = ['a'];
let arr2 = tail(letter);
//console.log("original array:" , letter);
//console.log("new array:", arr2);
assertEqual(letter.length, 1); // ensure we get back 1 elements
assertEqual(arr2, null); // ensure first element is null

// Test Case 3
const emptyArray = [];
let arr3 = tail(emptyArray);
//console.log("original array:" , emptyArray);
//console.log("new array:", arr3);
assertEqual(arr3, null); // ensure first element is null
