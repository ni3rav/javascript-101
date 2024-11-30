// 1. Filter Objects Based on Property Value
// Problem Statement:
// Write a function `filterLongBooks(arr)` that takes an array of objects representing books
// (with `title` and `pages` properties), and returns a new array with only the books that have more than 100 pages.

function filterLongBooks(arr) {
  // Use filter to find books with more than 100 pages
  return arr.filter((book) => book.pages > 100);
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

// 2. Find Students Who Passed
// Problem Statement:
// Write a function `getPassedStudents(arr)` that takes an array of student objects
// (with `name` and `score` properties), and returns a new array with only the students who have scored more than 60.

function getPassedStudents(arr) {
  // Use filter to find students with a score greater than 60
  return arr.filter((student) => student.score > 60);
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

// 3. Filter Employees by Department
// Problem Statement:
// Write a function `getSalesEmployees(arr)` that takes an array of employee objects
// (with `name` and `department` properties), and returns an array of employees who work in the "Sales" department.

function getSalesEmployees(arr) {
  // Use filter to find employees in the Sales department
  return arr.filter((employee) => employee.department === "Sales");
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

// 4. Filter Students Under Age 21
// Problem Statement:
// Write a function `filterUnderageStudents(arr)` that filters out all students under the age of 21 from an array of student objects.

function filterUnderageStudents(arr) {
  // Use filter to exclude students under 21
  return arr.filter((student) => student.age >= 21);
}

const studentsUnderage = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 24 },
];
console.log(filterUnderageStudents(studentsUnderage));
// Expected output:
// [
//     { name: 'Alice', age: 22 },
//     { name: 'Charlie', age: 24 }
// ]
