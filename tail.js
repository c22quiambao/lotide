const tail = function(passedArray) { //function to get tail of the array
  const newArray = passedArray.slice(1);
  return newArray;
};

module.exports = tail;
