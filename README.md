# HIGHER ORDER FUNCTIONS - SOURCE (ChatGPT)

Higher-order functions are one of the powerful features in JavaScript. A higher-order function is a function that either:

1. Takes one or more functions as arguments, or
2. Returns a function as its result.

These functions enable more abstract and flexible code.

## Here are some common higher-order functions and how to use them

### 1. `map`

`map` is used to transform each element in an array. It creates a new array with the results of calling a provided function on every element in the original array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

### 2. `filter`

`filter` creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(number => number % 2 === 0);

console.log(evens); // [2, 4]
```

### 3. `reduce`

`reduce` executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sum); // 15
```

### 4. `forEach`

`forEach` executes a provided function once for each array element. It's typically used to perform side effects.

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(number => {
    console.log(number);
});
// 1
// 2
// 3
// 4
// 5
```

### 5. `find`

`find` returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, `undefined` is returned.

```javascript
const numbers = [1, 2, 3, 4, 5];

const found = numbers.find(number => number > 3);

console.log(found); // 4
```

### 6. `some` and `every`

- `some` checks if at least one element in the array passes the test implemented by the provided function. It returns a boolean.
- `every` checks if all elements in the array pass the test implemented by the provided function. It also returns a boolean.

```javascript
const numbers = [1, 2, 3, 4, 5];

const someEven = numbers.some(number => number % 2 === 0);
const allEven = numbers.every(number => number % 2 === 0);

console.log(someEven); // true
console.log(allEven); // false
```

### Custom Higher-Order Functions

You can create your own higher-order functions as well. Here’s an example of a function that takes another function as an argument:

```javascript
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(5, console.log);
// 0
// 1
// 2
// 3
// 4
```

Or a function that returns another function:

```javascript
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // 10

const triple = createMultiplier(3);
console.log(triple(5)); // 15
```

### Conclusion

Higher-order functions are a key concept in functional programming and are widely used in JavaScript to create more abstract, reusable, and concise code. By mastering them, you can write more efficient and expressive JavaScript.
