//Import functions needed
//const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;

//Test Cases
describe("# Tests for the Lotide middle function #", () => {
  it("Should return [] given []", () => {
    const array = [];
    const result = middle(array);
    assert.deepEqual(result, []);
    assert.strictEqual(array.length, 0);
  });

  it("Should return [] given [1]", () => {
    const array = [1];
    const result = middle(array);
    assert.deepEqual(result, []);
    assert.strictEqual(array.length, 1);
  });

  it("Should return [] given [1,2]", () => {
    const array = [1,2];
    const result = middle(array);
    assert.deepEqual(result, []);
    assert.strictEqual(array.length, 2);
  });
  it("Should return [2, 3] given [1, 2, 3, 4]", () => {
    const array = [1, 2, 3, 4];
    const result = middle(array);
    assert.deepEqual(result, [2, 3]);
    assert.strictEqual(array.length, 4);
  });

  it("Should return [3] given [1, 2, 3, 4, 5]", () => {
    const array = [1, 2, 3, 4, 5];
    const result = middle(array);
    assert.deepEqual(result, [3]);
    assert.strictEqual(array.length, 5);
  });
});