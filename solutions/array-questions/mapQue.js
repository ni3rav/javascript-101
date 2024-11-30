// 1. Double Each Value in an Array
// Problem Statement:
// Write a function `doubleNumbers(arr)` that takes an array of numbers and returns a new array where each value is doubled.
function doubleNumbers(arr) {
  // Use map to double each value in the array
  return arr.map((num) => num * 2);
}
console.log(doubleNumbers([1, 2, 3, 4]));
// Expected output: [2, 4, 6, 8]

// 2. Convert Array of Strings to Lengths
// Problem Statement:
// Write a function `getStringLengths(arr)` that takes an array of strings and returns a new array with the lengths of each string.
function getStringLengths(arr) {
  // Use map to return the length of each string
  return arr.map((str) => str.length);
}
console.log(getStringLengths(["apple", "banana", "cherry"]));
// Expected output: [5, 6, 6]

// 3. Capitalize First Letter of Each Word
// Problem Statement:
// Write a function `capitalizeWords(arr)` that takes an array of words and returns a new array with each word's first letter capitalized.
function capitalizeWords(arr) {
  // Use map to capitalize the first letter of each word
  return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}
console.log(capitalizeWords(["hello", "world"]));
// Expected output: ['Hello', 'World']

// 4. Square Root of Each Element
// Problem Statement:
// Write a function `squareRoots(arr)` that takes an array of numbers and returns a new array containing the square root of each number.
function squareRoots(arr) {
  // Use map to return the square root of each element
  return arr.map((num) => Math.sqrt(num));
}
console.log(squareRoots([4, 9, 16]));
// Expected output: [2, 3, 4]
