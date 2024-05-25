// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const numbers = [4, 10, 15, 8, 25, 30, 1];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// Given an array of numbers, use filter to create a new array that contains only the even numbers.
const evenNumbers = numbers.filter(number => number % 2 === 0)
// console.log(evenNumbers)

// Given an array of strings, use filter to create a new array that contains only the strings with more than 5 characters.
const words = ["hello", "world", "javascript", "map", "filter", "reduce"];

const moreThanFiveChars = words.filter(word => word.length > 5)
// console.log(moreThanFiveChars)

// Given an array of objects representing people, use filter to create a new array that contains only the people who are 18 years old or older.
const people = [
    { name: "Alice", age: 17 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 15 },
    { name: "David", age: 19 }
];
const adults = people.filter(person => person.age > 18)
// console.log(adults)

// Given an array of numbers, use filter to create a new array that contains only the numbers greater than 10.
const greaterThanTen = numbers.filter(number => number > 10)
// console.log(greaterThanTen)

// Given an array of strings, use filter to create a new array that contains only the non-empty strings.
const strings = ["", "hello", "world", "", "javascript", "", "filter"];
const nonEmptyStrings = strings.filter(string => string.length > 0)
// console.log(nonEmptyStrings)

// Given an array of objects, use filter to create a new array that contains only the objects that have a specific property value.
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Apparel" },
    { name: "Phone", category: "Electronics" },
    { name: "Shoes", category: "Apparel" }
];

const electronicProducts = products.filter(product => product.category === 'Electronics')
// console.log(electronicProducts)

// Given an array of objects representing tasks, use filter to create a new array that contains only the completed tasks.
const tasks = [
    { task: "Do laundry", completed: true },
    { task: "Clean room", completed: false },
    { task: "Buy groceries", completed: true },
    { task: "Cook dinner", completed: false }
];

const completedTasks = tasks.filter(task => task.completed === true)
// console.log(completedTasks)

// Given an array of numbers, use filter to create a new array that contains only the prime numbers.
const isPrime = num => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false
    }
    return num > 1
}

const primeNumbers = numbers.filter(isPrime)
console.log(primeNumbers)
