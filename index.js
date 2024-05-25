// map is used to transform each element in an array. It creates a new array with the results of calling a provided function on every element in the original array.

const numbers = [1, 2, 3, 4 ,5]

const doubled = numbers.map(number => number * 2)

// console.log(doubled)

// filter creates a new array with all elements that pass the test implemented by the provided function

const evenNums = numbers.filter(number => number % 2 === 0)
const oddNums = numbers.filter(number => number % 2 === 1)
const greterThanThree = numbers.filter(number => number >= 3)
console.log(greterThanThree)
// console.log(evenNums)
// console.log(oddNums)

// reduce executes a reducer function (that you provide) on each element of the array, resulting in a single output value. 
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) // accumulator initialized to 0s
// console.log(sum)

// forEach executes a provided function once for each array element. It's typically used to perform side effects.
numbers.forEach(number => {console.log(number * 3)})

// find returns the value of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
const found = numbers.find(number => number >= 3)
console.log(found)

// some checks if at least one element in the array passes the test implemented by the provided function. It returns a boolean.
const someEven = numbers.some(number => number % 2 === 0)
console.log(someEven)

// every checks if all elements in the array pass the test implemented by the provided function. It also returns a boolean.
const everyEven = numbers.every(number => number % 2 === 0)
console.log(everyEven)
