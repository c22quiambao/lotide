// test/assertEqualTest.js
const tail = require('../tail');
//const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("# Tests for the Lotide tail function #", () => {
  it("Should return [\"banana\",\"orange\"] given [\"apple\",\"banana\",\"orange\"]", () => {
    assert.deepEqual(tail(["apple","banana","orange"]),["banana","orange"]);
  });
  it("Should return [4,3,2,1] given [5,4,3,2,1]", () => {
    assert.deepEqual(tail([5,4,3,2,1]),[4,3,2,1]);
  });
  it("Should return [] given ['a']", () => {
    assert.deepEqual(tail(['a']),[]);
  });
  it("Should return [] given []", () => {
    assert.deepEqual(tail([]),[]);
  });
});