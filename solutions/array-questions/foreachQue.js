// 1. Log Each Element to Console
// Problem Statement: 
// Write a function `logNumbers(arr)` that takes an array of numbers and logs each number to the console.
function logNumbers(arr) {
    // Use forEach to log each element of the array
    arr.forEach(num => console.log(num));
}
logNumbers([1, 2, 3, 4]); 
// Expected output: 1, 2, 3, 4 (each on a new line)


// 2. Sum All Numbers in an Array
// Problem Statement: 
// Write a function `sumNumbers(arr)` that uses `forEach()` to sum all the numbers in an array and returns the total.
function sumNumbers(arr) {
    let total = 0;
    // Use forEach to sum the values
    arr.forEach(num => total += num);
    return total;
}
console.log(sumNumbers([1, 2, 3, 4])); 
// Expected output: 10


// 3. Create a New Array with Element Indices
// Problem Statement: 
// Write a function `logElementsWithIndex(arr)` that takes an array and logs both the element and its index in each iteration.
function logElementsWithIndex(arr) {
    // Use forEach to log both element and its index
    arr.forEach((element, index) => {
        console.log(`Index ${index}: ${element}`);
    });
}
logElementsWithIndex(['a', 'b', 'c']); 
// Expected output: 'Index 0: a', 'Index 1: b', 'Index 2: c'


// 4. Multiply Each Element by 10
// Problem Statement: 
// Write a function `multiplyByTen(arr)` that takes an array of numbers and multiplies each element by 10 using `forEach()`. 
// Do not return anything; just modify the array.
function multiplyByTen(arr) {
    // Use forEach to modify each element in the array
    arr.forEach((value, index, array) => {
        array[index] = value * 10;
    });
}
let nums = [1, 2, 3];
multiplyByTen(nums);
console.log(nums); 
// Expected output: [10, 20, 30]



