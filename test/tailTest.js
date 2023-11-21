// test/assertEqualTest.js
const tail = require('../tail');
const assertEqual = require('../assertEqual');

// Test Case 1
const fruits = ["apple","banana","orange"];
let arr = tail(fruits);
assertEqual(arr.length, 2); // ensure we get back two elements
assertEqual(fruits.length, 3); // ensure we get back the original three elements
assertEqual(arr[0], "banana"); // ensure first element is "banana"
assertEqual(arr[1], "orange"); // ensure second element is "Orange"

// Test Case 2
const numbers = [5,4,3,2,1];
let arr1 = tail(numbers);
assertEqual(arr1.length, 4); // ensure we get back 4 elements
assertEqual(numbers.length, 5); // ensure we get back 5 elements
assertEqual(arr1[0], 4); // ensure first element is 4
assertEqual(arr1[1], 3); // ensure second element is 3
assertEqual(arr1[2], 2); // ensure third element is 2
assertEqual(arr1[3], 1); // ensure fourth element is 1

// Test Case 3
const letter = ['a'];
let arr2 = tail(letter);
assertEqual(letter.length, 1); // ensure we get back 1 element
assertEqual(arr2.length, 0); // array is empty

// Test Case 3
const emptyArray = [];
let arr3 = tail(emptyArray);
assertEqual(arr3.length, 0); // array is empty