// 1. Add a Property to Each Object
// Problem Statement:
// Write a function `addIsAdultProperty(arr)` that takes an array of objects representing people
// (with `name` and `age` properties), and returns a new array where each object has an additional
// property `isAdult` set to `true` if the `age` is 18 or above, otherwise `false`.

function addIsAdultProperty(arr) {
  // Use map to add the isAdult property to each object
  return arr.map((person) => ({
    ...person, // Spread the existing properties
    isAdult: person.age >= 18, // Add isAdult property based on the age
  }));
}

const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
];
console.log(addIsAdultProperty(people));
// Expected output:
// [
//     { name: 'Alice', age: 22, isAdult: true },
//     { name: 'Bob', age: 17, isAdult: false },
//     { name: 'Charlie', age: 25, isAdult: true }
// ]

// 2. Extract Specific Property from Objects
// Problem Statement:
// Write a function `extractNames(arr)` that takes an array of objects with `name` and `score` properties,
// and returns an array of names only.

function extractNames(arr) {
  // Use map to extract only the name from each object
  return arr.map((student) => student.name);
}

const students = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 85 },
];
console.log(extractNames(students));
// Expected output: ['Alice', 'Bob', 'Charlie']

// 3. Update Object Property
// Problem Statement:
// Write a function `increasePrices(arr)` that takes an array of objects representing products
// (with `name` and `price` properties), and returns a new array where each product's price is increased by 10%.

function increasePrices(arr) {
  // Use map to increase the price by 10% for each product
  return arr.map((product) => ({
    ...product, // Spread the existing properties
    price: product.price * 1.1, // Increase the price by 10%
  }));
}

const products = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 30 },
  { name: "Shoes", price: 50 },
];
console.log(increasePrices(products));
// Expected output:
// [
//     { name: 'Shirt', price: 22 },
//     { name: 'Pants', price: 33 },
//     { name: 'Shoes', price: 55 }
// ]

// 4. Modify Nested Object
// Problem Statement:
// Write a function `addGraduationStatus(arr)` that takes an array of objects representing students
// with nested objects (e.g., `name`, `age`, and `address`), and adds a new property `hasGraduated: false` to each student.

function addGraduationStatus(arr) {
  // Use map to add the hasGraduated property to each student
  return arr.map((student) => ({
    ...student, // Spread the existing properties
    hasGraduated: false, // Add hasGraduated property
  }));
}

const studentsWithAddress = [
  { name: "Alice", age: 22, address: "123 Street" },
  { name: "Bob", age: 18, address: "456 Avenue" },
];
console.log(addGraduationStatus(studentsWithAddress));
// Expected output:
// [
//     { name: 'Alice', age: 22, address: '123 Street', hasGraduated: false },
//     { name: 'Bob', age: 18, address: '456 Avenue', hasGraduated: false }
// ]
