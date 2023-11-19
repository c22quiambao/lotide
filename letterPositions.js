const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(actual, expected) {
  const isItEqual = eqArrays(actual,expected);
  if (isItEqual) {
    console.log(`🥳🥳🥳 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const sentenceArray = sentence.replace(/[^a-zA-Z/s0-9]/g, '');
  //const sentenceArray = sentence.split('');
  const results = {};
  // loop through array and input into object
  for (let i = 0; i <= sentenceArray.length - 1; i++) {
    const currentElement = sentenceArray[i];
     if (results[currentElement]) {
      results[currentElement].push(i);
    } else {
      results[currentElement] = [i];
    }
  }


  return results;
};


//Test
const sentenceInput = letterPositions("hello");
console.log("Letter position object", sentenceInput);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);

// TC 2
const sentenceInput1 = letterPositions("lighOthouseO iIn! the?% houseE");
console.log("Letter position object", sentenceInput1);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").l,[ 0 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").i,[ 1, 12 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").g,[ 2 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").h,[ 3, 6, 16, 18 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").O,[ 4, 11 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").t,[ 5, 15 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").o,[ 7, 19 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").u,[ 8, 20 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").s,[ 9, 21 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").e,[ 10, 17, 22 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").I,[ 13 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").n,[ 14 ]);
assertArraysEqual(letterPositions("lighOthouseO iIn! the?% houseE").E,[ 23 ]);