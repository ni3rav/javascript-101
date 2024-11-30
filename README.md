---
# NOTE: Assuming you already know basic stuff like variables, loops, and if-else.

## **Quick Refresher (because why not)**
---

### **1. What is JavaScript?**

- **A high-level, interpreted, dynamically typed programming language primarily used to create interactive and dynamic web pages.**
- JavaScript is one of the core technologies of the web, alongside HTML and CSS.
- Modern JavaScript can also be used for backend development (via **Node.js**)

---

### **2. Variables (The containers for your data)**

#### **Declaring variables:**

```javascript
let name = "JavaScript"; // Block-scoped, can be updated
const pi = 3.14; // Block-scoped, cannot be updated
var age = 25; // Function-scoped, avoid unless necessary
```

---

### **3. Loops (because repetition is key)**

#### **For loop (classic):**

```javascript
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
```

#### **For-of loop (best for arrays):**

```javascript
const fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
```

#### **For-in loop (best for objects):**

```javascript
const person = { name: "Alice", age: 30 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

#### **While loop:**

```javascript
let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}
```

---

### **4. Arrays (Storing multiple values)**

An array is a collection of values stored in a single variable.

#### **Basic operations:**

```javascript
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[1]); // Outputs: banana

fruits.push("mango"); // Add to the end
fruits.pop(); // Remove from the end
fruits.unshift("kiwi"); // Add to the beginning
fruits.shift(); // Remove from the beginning
```

#### **Useful Array Methods:**

0. **`map()`** - Returns a new array with the results of applying a function to each element.

   ```javascript
   const numbers = [1, 2, 3];
   const squares = numbers.map((num) => num * num);
   console.log(squares); // Outputs: [1, 4, 9]
   ```

1. **`filter()`** - Filters elements based on a condition.

   ```javascript
   const numbers = [1, 2, 3, 4];
   const even = numbers.filter((num) => num % 2 === 0);
   console.log(even); // Outputs: [2, 4]
   ```

2. **`reduce()`** - Reduces an array to a single value.

   ```javascript
   const numbers = [1, 2, 3];
   const sum = numbers.reduce((acc, num) => acc + num, 0);
   console.log(sum); // Outputs: 6
   ```

3. **`forEach()`** - Loops through each element in the array.

   ```javascript
   const fruits = ["apple", "banana", "cherry"];
   fruits.forEach((fruit) => console.log(fruit));
   ```

#### **Questions**

### Questions for `map()`:

1. **Double Each Value in an Array**: Write a function that takes an array of numbers and returns a new array where each value is doubled.
   ```javascript
   function doubleNumbers(arr) {
     // Implement the solution using map
   }
   console.log(doubleNumbers([1, 2, 3, 4])); // Expected output: [2, 4, 6, 8]
   ```
2. **Convert Array of Strings to Lengths**: Write a function that takes an array of strings and returns a new array with the lengths of each string.

   ```javascript
   function getStringLengths(arr) {
     // Implement the solution using map
   }
   console.log(getStringLengths(["apple", "banana", "cherry"])); // Expected output: [5, 6, 6]
   ```

3. **Capitalize First Letter of Each Word**: Write a function that takes an array of words and returns a new array with each word's first letter capitalized.

   ```javascript
   function capitalizeWords(arr) {
     // Implement the solution using map
   }
   console.log(capitalizeWords(["hello", "world"])); // Expected output: ['Hello', 'World']
   ```

4. **Square Root of Each Element**: Write a function that takes an array of numbers and returns a new array containing the square root of each number.

   ```javascript
   function squareRoots(arr) {
     // Implement the solution using map
   }
   console.log(squareRoots([4, 9, 16])); // Expected output: [2, 3, 4]
   ```

### Questions for `filter()`:

1. **Get Even Numbers from an Array**: Write a function that takes an array of numbers and returns a new array with only the even numbers.

   ```javascript
   function getEvenNumbers(arr) {
     // Implement the solution using filter
   }
   console.log(getEvenNumbers([1, 2, 3, 4, 5, 6])); // Expected output: [2, 4, 6]
   ```

2. **Find Words Longer Than 4 Characters**: Write a function that takes an array of strings and returns a new array with only the strings that have more than 4 characters.

   ```javascript
   function findLongWords(arr) {
     // Implement the solution using filter
   }
   console.log(findLongWords(["apple", "pie", "banana", "cherry"])); // Expected output: ['apple', 'banana', 'cherry']
   ```

3. **Filter Numbers Greater Than 10**: Write a function that filters out numbers that are greater than 10 from an array of numbers.

   ```javascript
   function filterNumbers(arr) {
     // Implement the solution using filter
   }
   console.log(filterNumbers([5, 10, 15, 20, 25])); // Expected output: [15, 20, 25]
   ```

4. **Remove All Empty Strings**: Write a function that removes all empty strings from an array.

   ```javascript
   function removeEmptyStrings(arr) {
     // Implement the solution using filter
   }
   console.log(removeEmptyStrings(["apple", "", "banana", "", "cherry"])); // Expected output: ['apple', 'banana', 'cherry']
   ```

### Questions for `forEach()`:

1. **Log Each Element to Console**: Write a function that takes an array of numbers and logs each number to the console.

   ```javascript
   function logNumbers(arr) {
     // Implement the solution using forEach
   }
   logNumbers([1, 2, 3, 4]); // Expected output: 1 2 3 4 (each number logged to console)
   ```

2. **Sum All Numbers in an Array**: Write a function that uses `forEach()` to sum all the numbers in an array and returns the total.

   ```javascript
   function sumNumbers(arr) {
     // Implement the solution using forEach
   }
   console.log(sumNumbers([1, 2, 3, 4])); // Expected output: 10
   ```

3. **Create a New Array with Element Indices**: Write a function that takes an array and logs both the element and its index in each iteration.

   ```javascript
   function logElementsWithIndex(arr) {
     // Implement the solution using forEach
   }
   logElementsWithIndex(["a", "b", "c"]); // Expected output: 'Index 0: a', 'Index 1: b', 'Index 2: c'
   ```

4. **Multiply Each Element by 10**: Write a function that takes an array of numbers and multiplies each element by 10 using `forEach()`. Do not return anything; just modify the array.

   ```javascript
   function multiplyByTen(arr) {
     // Implement the solution using forEach
   }
   let nums = [1, 2, 3];
   multiplyByTen(nums);
   console.log(nums); // Expected output: [10, 20, 30]
   ```

##### Bonus: Mix `map()`, `filter()`, and `forEach()` in a Single Problem

**Problem:** Write a function that does the following:

1. Filters out all numbers less than 5 from an array.
2. Doubles the remaining numbers using `map()`.
3. Logs each result to the console using `forEach()`.

```javascript
function processNumbers(arr) {
  // Step 1: Filter numbers greater than or equal to 5
  // Step 2: Map to double the values
  // Step 3: Use forEach to log the doubled values
}

processNumbers([1, 2, 3, 6, 7, 8]); // Expected output: 12 14 16
```

---

### **5. Objects (Key-value pairs)**

Objects are collections of data and functionality.

#### **Basic structure:**

```javascript
const person = {
  name: "Alice",
  age: 30,
  isDeveloper: true,
};
console.log(person.name); // Outputs: Alice
```

#### **Useful Object Methods:**

1. **`Object.keys()`** - Returns an array of all the keys in the object.

   ```javascript
   const keys = Object.keys(person);
   console.log(keys); // Outputs: ["name", "age", "isDeveloper"]
   ```

2. **`Object.values()`** - Returns an array of all the values in the object.

   ```javascript
   const values = Object.values(person);
   console.log(values); // Outputs: ["Alice", 30, true]
   ```

3. **`Object.entries()`** - Returns an array of key-value pairs.

   ```javascript
   const entries = Object.entries(person);
   console.log(entries); // Outputs: [["name", "Alice"], ["age", 30], ["isDeveloper", true]]
   ```

4. **Adding/Removing Properties:**

   ```javascript
   person.hobby = "coding"; // Add a property
   delete person.isDeveloper; // Remove a property
   console.log(person);
   ```

#### **Questions**

### Questions for `map()` with Objects:

1. **Add a Property to Each Object**: Write a function that takes an array of objects representing people (with `name` and `age` properties), and returns a new array where each object has an additional property `isAdult` set to `true` if the `age` is 18 or above, otherwise `false`.

   ```javascript
   function addIsAdultProperty(arr) {
     // Implement the solution using map
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
   ```

2. **Extract Specific Property from Objects**: Write a function that takes an array of objects with `name` and `score` properties, and returns an array of names only.

   ```javascript
   function extractNames(arr) {
     // Implement the solution using map
   }
   const students = [
     { name: "Alice", score: 90 },
     { name: "Bob", score: 80 },
     { name: "Charlie", score: 85 },
   ];
   console.log(extractNames(students)); // Expected output: ['Alice', 'Bob', 'Charlie']
   ```

3. **Update Object Property**: Write a function that takes an array of objects representing products (with `name` and `price` properties), and returns a new array where each product's price is increased by 10%.

   ```javascript
   function increasePrices(arr) {
     // Implement the solution using map
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
   ```

4. **Modify Nested Object**: Write a function that takes an array of objects representing students with nested objects (e.g., `name`, `age`, and `address`), and adds a new property `hasGraduated: false` to each student.

   ```javascript
   function addGraduationStatus(arr) {
     // Implement the solution using map
   }
   const students = [
     { name: "Alice", age: 22, address: "123 Street" },
     { name: "Bob", age: 18, address: "456 Avenue" },
   ];
   console.log(addGraduationStatus(students));
   // Expected output:
   // [
   //     { name: 'Alice', age: 22, address: '123 Street', hasGraduated: false },
   //     { name: 'Bob', age: 18, address: '456 Avenue', hasGraduated: false }
   // ]
   ```

### Questions for `filter()` with Objects:

1. **Filter Objects Based on Property Value**: Write a function that takes an array of objects representing books (with `title` and `pages` properties), and returns a new array with only the books that have more than 100 pages.

   ```javascript
   function filterLongBooks(arr) {
     // Implement the solution using filter
   }
   const books = [
     { title: "Book A", pages: 120 },
     { title: "Book B", pages: 80 },
     { title: "Book C", pages: 150 },
   ];
   console.log(filterLongBooks(books));
   // Expected output:
   // [
   //     { title: 'Book A', pages: 120 },
   //     { title: 'Book C', pages: 150 }
   // ]
   ```

2. **Find Students Who Passed**: Write a function that takes an array of student objects (with `name` and `score` properties), and returns a new array with only the students who have scored more than 60.

   ```javascript
   function getPassedStudents(arr) {
     // Implement the solution using filter
   }
   const students = [
     { name: "Alice", score: 75 },
     { name: "Bob", score: 55 },
     { name: "Charlie", score: 80 },
   ];
   console.log(getPassedStudents(students));
   // Expected output:
   // [
   //     { name: 'Alice', score: 75 },
   //     { name: 'Charlie', score: 80 }
   // ]
   ```

3. **Filter Employees by Department**: Write a function that takes an array of employee objects (with `name` and `department` properties), and returns an array of employees who work in the "Sales" department.

   ```javascript
   function getSalesEmployees(arr) {
     // Implement the solution using filter
   }
   const employees = [
     { name: "John", department: "Sales" },
     { name: "Jane", department: "HR" },
     { name: "Bob", department: "Sales" },
   ];
   console.log(getSalesEmployees(employees));
   // Expected output:
   // [
   //     { name: 'John', department: 'Sales' },
   //     { name: 'Bob', department: 'Sales' }
   // ]
   ```

4. **Filter Students Under Age 21**: Write a function that filters out all students under the age of 21 from an array of student objects.

   ```javascript
   function filterUnderageStudents(arr) {
     // Implement the solution using filter
   }
   const students = [
     { name: "Alice", age: 22 },
     { name: "Bob", age: 19 },
     { name: "Charlie", age: 24 },
   ];
   console.log(filterUnderageStudents(students));
   // Expected output:
   // [
   //     { name: 'Alice', age: 22 },
   //     { name: 'Charlie', age: 24 }
   // ]
   ```

### Questions for `forEach()` with Objects:

1. **Print Object Properties**: Write a function that takes an array of objects representing people (with `name` and `age` properties) and logs each person's name and age to the console.

   ```javascript
   function logPersonDetails(arr) {
     // Implement the solution using forEach
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
   ```

2. **Update Object Property**: Write a function that takes an array of objects representing products (with `name` and `inStock` properties) and updates the `inStock` property to `false` for each product that has `inStock: true`. Use `forEach()` to modify the objects.

   ```javascript
   function updateStockStatus(arr) {
     // Implement the solution using forEach
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
   ```

3. **Total Salary Calculation**: Write a function that calculates the total salary of all employees in an array of employee objects, where each object has `name` and `salary` properties. Use `forEach()` to sum up the salaries.

   ```javascript
   function calculateTotalSalary(arr) {
     // Implement the solution using forEach
   }
   const employees = [
     { name: "John", salary: 5000 },
     { name: "Jane", salary: 6000 },
     { name: "Bob", salary: 7000 },
   ];
   console.log(calculateTotalSalary(employees)); // Expected output: 18000
   ```

4. **Log Array of Objects in a Custom Format**: Write a function that takes an array of objects representing products with `name` and `price` properties and logs them in the following format: "Product: [name], Price: [price]".

   ```javascript
   function logProducts(arr) {
       // Implement the solution using forEach
   }
   const products = [
       { name: 'Shirt', price: 20 },
       { name: 'Pants', price
   ```

: 30 }, { name: 'Shoes', price: 50 } ]; logProducts(products); // Expected output: // 'Product: Shirt, Price: 20' // 'Product: Pants, Price: 30' // 'Product: Shoes, Price: 50'

### Bonus: Mix `map()`, `filter()`, and `forEach()` with Objects

**Problem:**
Write a function that does the following:

1. Filters out all products with a price less than 30.
2. Maps over the remaining products to apply a 10% discount.
3. Logs the updated product details using `forEach()`.

```javascript
function processProducts(arr) {
  // Step 1: Filter products with price >= 30
  // Step 2: Map to apply a 10% discount
  // Step 3: Use forEach to log the updated details
}

const products = [
  { name: "Shirt", price: 20 },
  { name: "Pants", price: 40 },
  { name: "Shoes", price: 50 },
  { name: "Hat", price: 10 },
];
processProducts(products);
// Expected output:
// 'Product: Pants, Price: 36'
// 'Product: Shoes, Price: 45'
```

---

### **6. DOM Manipulation (The main topic)**

The Document Object Model (DOM) represents your web page. JavaScript lets you interact with and modify it dynamically.

#### **Accessing Elements:**

1. **By ID:**

   ```javascript
   const element = document.getElementById("myElement");
   console.log(element);
   ```

2. **By Class Name:**

   ```javascript
   const elements = document.getElementsByClassName("myClass");
   console.log(elements);
   ```

3. **By Tag Name:**

   ```javascript
   const elements = document.getElementsByTagName("div");
   console.log(elements);
   ```

4. **Using Query Selector (modern):**

   ```javascript
   const element = document.querySelector(".myClass"); // First match
   const allElements = document.querySelectorAll(".myClass"); // All matches
   console.log(allElements);
   ```

#### **Modifying Content:**

1. **Change Text:**

   ```javascript
   const element = document.getElementById("myElement");
   element.textContent = "Hello, World!";
   ```

2. **Change HTML:**

   ```javascript
   element.innerHTML = "<strong>Bold Text</strong>";
   ```

#### **Changing Styles:**

```javascript
element.style.color = "red";
element.style.backgroundColor = "yellow";
```

#### **Adding and Removing Classes:**

```javascript
element.classList.add("new-class");
element.classList.remove("old-class");
```

#### **Handling Events:**

1. **Using `onclick`:**

   ```javascript
   const button = document.getElementById("myButton");
   button.onclick = function () {
     alert("Button clicked!");
   };
   ```

2. **Using `addEventListener`:**

   ```javascript
   button.addEventListener("click", () => {
     console.log("Button clicked!");
   });
   ```

#### **Creating New Elements:**

```javascript
const newElement = document.createElement("div");
newElement.textContent = "I'm new here!";
document.body.appendChild(newElement);
```

---

### _\*\*7. Some Exercises!_

#### 1. Form Validation

#### 2. A counter app

#### 3. A button that changes background color

#### **Solutions are in `solutions` folder**

---

### **What's next from here?**

For now, focus on mastering DOM manipulation. Later, explore these advanced topics:

1. **Higher-Order Functions and Callbacks**
2. **Promises and Async/Await**
3. **ES6+ Features (Destructuring, Spread Operator, etc.)**
4. \*\*Once you're comfortable with topics above, you may start working with React JS
5. **Once you get your basics sorted in React, I'd highly recommend you to start with TypeScript Basics**

- ##### Here are the resources for the stuff above:
  1.  [Namaste JavaScript (A must watch if you want to learn JS in depth)](https://youtube.com/playlist?list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&si=EhEcEcfxDRsLganj)
  2.  [JavaScript needed for React](https://youtu.be/m55PTVUrlnA?si=FGSb_4gM4vZkrPpj)
  3.  [React Docs - Best Place to learn React ](https://react.dev/)
  4.  [TypeScript Basics](https://youtu.be/ahCwqrYpIuM?si=ctb_pysPAWIHelbM)
  5.  [React with TypeScript](https://www.youtube.com/watch?v=joTOrCiAPB4)

---
