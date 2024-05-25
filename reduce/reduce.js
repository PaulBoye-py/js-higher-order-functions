const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersTwo = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];

// Given an array of numbers, use reduce to calculate the sum of all the numbers in the array.
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(sum)

// Given an array of numbers, use reduce to calculate the product of all the numbers in the array.
const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1)
// console.log(product)

// Given an array of strings, use reduce to concatenate all the strings into a single string.
const strings = ["Hello", " ", "world", "!"];
const sentence = strings.reduce((acc, cur) => acc + cur, '')
// console.log(sentence)

// Given an array of numbers, use reduce to count the occurrences of each number in the array and return an object with the counts.
const countOfNumbers = numbersTwo.reduce((acc, cur) => {

   acc[cur] = (acc[cur] || 0) + 1
   return acc
},{})
// console.log(countOfNumbers)

// Given a nested array, use reduce to flatten it into a single array.
const nestedArray = [[1, 2], [3, 4], [5, 6], [7, 8, 9]];
const singleArray = nestedArray.reduce((acc, curr) => acc.concat(curr), [])
// console.log(singleArray)

// Given an array of numbers, use reduce to find the maximum value in the array.
const maxNum = numbers.reduce((acc, curr) => {
    if (curr > acc) {
        return curr
    } else {
        return acc
    }
}, 0) 
// console.log(maxNum)

// Given an array of objects, use reduce to group the objects by a specific property.
const people = [
    { name: "Alice", age: 21 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 21 },
    { name: "David", age: 25 },
    { name: "Edward", age: 21 }
];

const groupByAge = people.reduce((acc, curr) => {
    (acc[curr.age] = acc[curr.age] || []).push(curr)
    return acc;
}, {})

// console.log(groupByAge)

// Given an array of objects representing blog posts, use reduce to calculate the total number of likes.
const blogs = [
    { title: "Blog A", likes: 10 },
    { title: "Blog B", likes: 20 },
    { title: "Blog C", likes: 30 }
];

const totalLikes = blogs.reduce((acc, curr) => acc + curr.likes, 0)
console.log(totalLikes)