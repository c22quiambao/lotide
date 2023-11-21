//middle FUNCTION
const middle = function(array) {
  let midArr = [];
  if (array.length <= 2) {
    return midArr;
  }
  if (array.length % 2 === 0) {
    let middPosB = array.length / 2;
    let middPosA = middPosB - 1;
    midArr.push(array[middPosA]);
    midArr.push(array[middPosB]);
    return midArr;
  }
  if (array.length % 2 !== 0) {
    let middPos = Math.floor(array.length / 2);
    midArr.push(array[middPos]);
    return midArr;
  }
};

module.exports = middle;