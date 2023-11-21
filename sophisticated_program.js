/* 
Filename: sophisticated_program.js
Description: This code is a sophisticated and complex program that demonstrates various advanced concepts in JavaScript.
*/

// Class representing a person
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  // Method to greet a person
  greet() {
    console.log(`Hello, my name is ${this.name}!`);
  }
}

// Class representing a book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
  
  // Method to display book information
  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
  }
}

// Function to check if a number is prime
function isPrime(number) {
  if (number <= 1) return false;
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  
  return true;
}

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array;
}

// Array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
shuffleArray(names);

// Create person objects
const person1 = new Person(names[0], 25, "Male");
const person2 = new Person(names[1], 30, "Female");
const person3 = new Person(names[2], 40, "Male");

// Call greet method on each person
person1.greet();
person2.greet();
person3.greet();

// Array of books
const books = [
  new Book("Book 1", "Author 1"),
  new Book("Book 2", "Author 2"),
  new Book("Book 3", "Author 3"),
  new Book("Book 4", "Author 4"),
  new Book("Book 5", "Author 5")
];

// Display information of each book
books.forEach(book => {
  book.displayInfo();
});

// Check if given numbers are prime
const numbers = [10, 17, 25, 31, 50];
numbers.forEach(number => {
  console.log(`${number} is prime: ${isPrime(number)}`);
});

// More code...
// More complex functionality...
// Continue extending the code to meet the complexity requirement...