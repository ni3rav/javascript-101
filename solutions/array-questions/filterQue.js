// 1. Get Even Numbers from an Array
// Problem Statement:
// Write a function `getEvenNumbers(arr)` that takes an array of numbers and returns a new array with only the even numbers.
function getEvenNumbers(arr) {
  // Use filter to return only even numbers
  return arr.filter((num) => num % 2 === 0);
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
// Expected output: [2, 4, 6]

// 2. Find Words Longer Than 4 Characters
// Problem Statement:
// Write a function `findLongWords(arr)` that takes an array of strings and returns a new array with only the strings that have more than 4 characters.
function findLongWords(arr) {
  // Use filter to return only words longer than 4 characters
  return arr.filter((word) => word.length > 4);
}
console.log(findLongWords(["apple", "pie", "banana", "cherry"]));
// Expected output: ['apple', 'banana', 'cherry']

// 3. Filter Numbers Greater Than 10
// Problem Statement:
// Write a function `filterNumbers(arr)` that filters out numbers that are greater than 10 from an array of numbers.
function filterNumbers(arr) {
  // Use filter to return numbers greater than 10
  return arr.filter((num) => num > 10);
}
console.log(filterNumbers([5, 10, 15, 20, 25]));
// Expected output: [15, 20, 25]

// 4. Remove All Empty Strings
// Problem Statement:
// Write a function `removeEmptyStrings(arr)` that removes all empty strings from an array.
function removeEmptyStrings(arr) {
  // Use filter to return only non-empty strings
  return arr.filter((str) => str !== "");
}
console.log(removeEmptyStrings(["apple", "", "banana", "", "cherry"]));
// Expected output: ['apple', 'banana', 'cherry']
