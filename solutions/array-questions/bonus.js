// BONUS: Mix `map()`, `filter()`, and `forEach()` in a Single Problem
// Problem Statement:
// 1. Filters out all numbers less than 5 from an array.
// 2. Doubles the remaining numbers using `map()`.
// 3. Logs each result to the console using `forEach()`.
function processNumbers(arr) {
  // Step 1: Filter numbers greater than or equal to 5
  const filteredNumbers = arr.filter((num) => num >= 5);

  // Step 2: Map to double the values
  const doubledNumbers = filteredNumbers.map((num) => num * 2);

  // Step 3: Use forEach to log the doubled values
  doubledNumbers.forEach((num) => console.log(num));
}

processNumbers([1, 2, 3, 6, 7, 8]);
// Expected output: 12 14 16 (logged to console)
