// test/assertEqualTest.js
const head = require('../head');
const assertEqual = require('../assertEqual');

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head([1,2,3]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Jude"]), "Hello");
assertEqual(head(), "Hello");