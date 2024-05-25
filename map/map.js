// Given an array of numbers, use map to create a new array where each number is doubled.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const doubled = numbers.map(number => number * 2)
// console.log(doubled)

// Given an array of numbers, use map to create a new array where each number is converted to a string.
const newStrings = numbers.map(number => number.toString())
// console.log(numbers, newStrings)

// Given an array of objects, use map to create a new array that contains only the values of a specific property.
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const peopleNames = people.map(person => person.name)
// console.log(peopleNames)

// Given an array of strings, use map to create a new array that contains the length of each string
const words = ["hello", "world", "javascript", "map"];
const wordLength = words.map(word => word.length)
// console.log(wordLength)

// Given an array of strings, use map to create a new array where each string is transformed to uppercase.
const wordsToUppercase = words.map(word => word.toUpperCase())
// console.log(wordsToUppercase)

// Given an array of numbers, use map to create a new array where each number is squared
const squared = numbers.map(number => number * number)
// console.log(squared)

// Given an array of objects representing products, use map to create a new array of strings that describe each product.
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];

const productDescription = products.map(product => `The price of the ${(product.name).toLowerCase()} is $${product.price}.`)
// console.log(productDescription)

