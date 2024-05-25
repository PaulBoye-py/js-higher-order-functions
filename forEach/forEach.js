// Given an array of numbers, use forEach to calculate the sum of the elements.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0

numbers.forEach(num => {
    sum += num
})

// console.log(sum)

// Given an array of strings, use forEach to print each string to the console.
const fruits = ['apple', 'banana', 'cherry', 'date'];
// fruits.forEach(fruit => console.log(fruit))

// Given an array of numbers, use forEach to create a new array where each element is doubled.
let doubled = []
numbers.forEach(num => {
    doubled.push(num * 2)
})

// console.log(doubled)

// Given an array of numbers, use forEach to create a new array containing only the even numbers.
let evenNums = []
numbers.forEach(num => {
    if (num % 2 === 0) evenNums.push(num)
})

// console.log(evenNums)

// Given an array of strings, use forEach to count the occurrences of each string and store the results in an object.
const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const wordCount = {}

words.forEach(word => {
    if (wordCount[word]) {
        wordCount[word] ++
    } else {
        wordCount[word] = 1
    }
})

// console.log(wordCount)

// Given an array of any type, use forEach to log each element along with its index.
const mixedArray = [1, 'hello', true, { key: 'value' }, [1, 2, 3]];
// mixedArray.forEach((element, index) => console.log(`Index ${index}: ${element}`))

// Given an array of strings, use forEach to create a string of HTML list items.
const items = ['item1', 'item2', 'item3'];
let hmtlList = `<ul>`

items.forEach((item, index) => {
    hmtlList += `<li key=${index}>${item}</li>`
    hmtlList += `</ul>`
})
// console.log(hmtlList)

// Given an array of numbers, use forEach to print elements that are at odd indices.
const newNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

newNumbers.forEach((number, index) => {
    if (index % 2 !== 0) {
        console.log(number)
    }
})
