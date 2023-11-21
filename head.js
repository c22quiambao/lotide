const assertEqual = require('./assertEqual');

//function to get head of the array
const head = function(arrayPassed) {
  if (Array.isArray(arrayPassed) === false) {
    return undefined;
  }
  const firstElement = arrayPassed.shift();
  return firstElement;
};

module.exports = head;