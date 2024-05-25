# Sure! Here are the exercises again with the solutions commented out

## Questions

### Exercise 1: Double the Numbers

Given an array of numbers, use `map` to create a new array where each number is doubled.

```javascript
const numbers = [1, 2, 3, 4, 5];
// Your code here
// const doubled = numbers.map(number => number * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
```

### Exercise 2: Convert to Strings

Given an array of numbers, use `map` to create a new array where each number is converted to a string.

```javascript
const numbers = [1, 2, 3, 4, 5];
// Your code here
// const strings = numbers.map(number => number.toString());
// console.log(strings); // ["1", "2", "3", "4", "5"]
```

### Exercise 3: Extract Property Values

Given an array of objects, use `map` to create a new array that contains only the values of a specific property.

```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
// Your code here
// const names = people.map(person => person.name);
// console.log(names); // ["Alice", "Bob", "Charlie"]
```

### Exercise 4: Calculate Lengths

Given an array of strings, use `map` to create a new array that contains the length of each string.

```javascript
const words = ["hello", "world", "javascript", "map"];
// Your code here
// const lengths = words.map(word => word.length);
// console.log(lengths); // [5, 5, 10, 3]
```

### Exercise 5: Uppercase Transformation

Given an array of strings, use `map` to create a new array where each string is transformed to uppercase.

```javascript
const words = ["hello", "world", "javascript", "map"];
// Your code here
// const uppercased = words.map(word => word.toUpperCase());
// console.log(uppercased); // ["HELLO", "WORLD", "JAVASCRIPT", "MAP"]
```

### Exercise 6: Square the Numbers

Given an array of numbers, use `map` to create a new array where each number is squared.

```javascript
const numbers = [1, 2, 3, 4, 5];
// Your code here
// const squared = numbers.map(number => number ** 2);
// console.log(squared); // [1, 4, 9, 16, 25]
```

### Exercise 7: Format Objects

Given an array of objects representing products, use `map` to create a new array of strings that describe each product.

```javascript
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 }
];
// Your code here
// const descriptions = products.map(product => `${product.name} costs $${product.price}`);
// console.log(descriptions); // ["Laptop costs $1000", "Phone costs $500", "Tablet costs $300"]
```

### Exercise 8: Add a New Property

Given an array of objects, use `map` to create a new array of objects where each object has an additional property.

```javascript
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];
// Your code here
// const usersWithGreeting = users.map(user => ({ ...user, greeting: `Hello, ${user.name}!` }));
// console.log(usersWithGreeting);
// [
//   { name: "Alice", age: 25, greeting: "Hello, Alice!" },
//   { name: "Bob", age: 30, greeting: "Hello, Bob!" },
//   { name: "Charlie", age: 35, greeting: "Hello, Charlie!" }
// ]
```

These exercises will help you get comfortable with the `map` function and how to use it in various scenarios. Try to solve them on your own before checking the solutions!
