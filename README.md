# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @c22quiambao/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: retrieve the head of an array
* `tail(...)`: retrieve the tail of the array
* `middle(...)`:  retrieve the middle of an array
* `assertArrayEqual(...)`:  assertion to check if arrays supplied are equal
* `assertEqual(...)`:  assertion to check if supplied expected value actual value are equal
* `assertObjectsEqual(...)`:  assertion to check if objects supplied are equal
* `countLetters(...)`: counts the number of occurences a letter appears on a string
* `countOnly(...)`: Counts elements from an array based from an object
* `eqArrays(...)`: validates if given arrays are equal
* `eqObjects(...)`: validates if given objects are equal
* `findKey(...)`: finds the  object key with the highest key value
* `findKeyByValue(...)`: finds the  object key given a value element
* `letterPositions(...)`: retrieves the index/indexes of a letter in string
* `map(...)`: creates a new array based from another array by mapping taking only a part of each array element
* `takeUntil(...)`: Stop collecting items from an array when the callback returns a truthy value
* `without(...)`: removes items on an array  based from another array