// 1. Print Object Properties
// Problem Statement:
// Write a function `logPersonDetails(arr)` that takes an array of objects representing people
// (with `name` and `age` properties) and logs each person's name and age to the console.

function logPersonDetails(arr) {
  // Use forEach to log each person's name and age
  arr.forEach((person) => {
    console.log(`${person.name} is ${person.age} years old`);
  });
}

const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
];
logPersonDetails(people);
// Expected output:
// 'Alice is 22 years old'
// 'Bob is 17 years old'
// 'Charlie is 25 years old'

// 2. Update Object Property
// Problem Statement:
// Write a function `updateStockStatus(arr)` that takes an array of objects representing products
// (with `name` and `inStock` properties) and updates the `inStock` property to `false` for each product
// that has `inStock: true`. Use `forEach()` to modify the objects.

function updateStockStatus(arr) {
  // Use forEach to update inStock to false for products that are currently in stock
  arr.forEach((product) => {
    if (product.inStock === true) {
      product.inStock = false;
    }
  });
}

const products = [
  { name: "Shirt", inStock: true },
  { name: "Pants", inStock: false },
  { name: "Shoes", inStock: true },
];
updateStockStatus(products);
console.log(products);
// Expected output:
// [
//     { name: 'Shirt', inStock: false },
//     { name: 'Pants', inStock: false },
//     { name: 'Shoes', inStock: false }
// ]

// 3. Total Salary Calculation
// Problem Statement:
// Write a function `calculateTotalSalary(arr)` that calculates the total salary of all employees
// in an array of employee objects, where each object has `name` and `salary` properties.
// Use `forEach()` to sum up the salaries.

function calculateTotalSalary(arr) {
  let totalSalary = 0;
  // Use forEach to accumulate the total salary
  arr.forEach((employee) => {
    totalSalary += employee.salary;
  });
  return totalSalary;
}

const employees = [
  { name: "John", salary: 5000 },
  { name: "Jane", salary: 6000 },
  { name: "Bob", salary: 7000 },
];
console.log(calculateTotalSalary(employees));
// Expected output: 18000

// 4. Log Array of Objects in a Custom Format
// Problem Statement:
// Write a function `logProducts(arr)` that takes an array of objects representing products
// with `name` and `price` properties and logs them in the following format:
// "Product: [name], Price: [price]".

function logProducts(arr) {
  // Use forEach to log each product's name and price in the custom format
  arr.forEach((product) => {
    console.log(`Product: ${product.name}, Price: ${product.price}`);
  });
}

const productsList = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 30 },
  { name: "Shoes", price: 50 },
];
logProducts(productsList);
// Expected output:
// 'Product: Shirt, Price: 20'
// 'Product: Pants, Price: 30'
// 'Product: Shoes, Price: 50'
