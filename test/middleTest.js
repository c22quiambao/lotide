//Import functions needed
//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

//Test Cases
describe("# Tests for the Lotide middle function #", () => {
  it("Should return [] given []", () => {
    assert.deepEqual(middle([]),[]);
  });

  it("Should return [] given [1]", () => {
    assert.deepEqual(middle([1]),[]);
  });
  it("Should return [] given [1,2]", () => {
    assert.deepEqual(middle([1,2]),[]);
  });
  it("Should return [2, 3] given [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });
  it("Should return [3] given [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });
});