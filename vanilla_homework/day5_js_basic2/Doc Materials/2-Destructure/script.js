const arr1 = ["🥓", "🍕", "🍟"]
const [bacon, pizza, fries] = arr1

//* Destructuring arrays
console.log(bacon) // 🥓
console.log(pizza) // 🍕
console.log(fries) // 🍟

//* Destructuring with rest operator
const [, , third] = arr1
console.log(third) // 🍟

//* Skipping elements
const [first, ...rest] = arr1
console.log(first) // 🥓
console.log(rest) // [ '🍕', '🍟' ]

//* Default values: variable = defaultValue
const arr2 = [undefined, "🍕", "🍟"]
const [bacon2 = "🐷", pizza2, fries2] = arr2

//* Destructuring objects
const obj = {
  shroom: "🍄",
  banana: "🍌",
  pepper: "🌶️",
}
const { shroom, banana, pepper } = obj

//* Default values in objects: variable = defaultValue
const obj2 = {
  apple: undefined,
  orange: "🍊",
  grape: "🍇",
}
const { apple = "🍏", orange, grape } = obj2

//* Renaming variables: ogName: newName
const { shroom: mushroom, banana: fruit, pepper: spice } = obj
console.log(mushroom) // 🍄
console.log(fruit) // 🍌
console.log(spice) // 🌶️

//* Nested destructuring
const obj3 = {
  parent: {
    child: "👶",
  },
}
const {
  parent: { child },
} = obj3
console.log(child) // 👶

//* Destructuring for loops
const arr3 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
]
for (const { name, age } of arr3) {
  console.log(`${name} is ${age} years old.`)
}
// Alice is 30 years old.
// Bob is 25 years old.
// Charlie is 35 years old.

//* Destructuring function parameters
function displayInfo({ name, age }) {
  console.log(`${name} is ${age} years old.`)
}
const person = { name: "Dave", age: 40 }
displayInfo(person) // Dave is 40 years old.

//* Destructuring with default values in function parameters
function greet({ name = "Guest", age = 0 } = {}) {
  console.log(`Hello, ${name}! You are ${age} years old.`)
}
greet() // Hello, Guest! You are 0 years old.
greet({ name: "Eve" }) // Hello, Eve! You are 0 years old.
greet({ age: 25 }) // Hello, Guest! You are 25 years old.
greet({ name: "Frank", age: 30 }) // Hello, Frank! You are 30 years old.

//* Destructuring with rest operator in function parameters
function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0)
}
console.log(sumAll(1, 2, 3, 4, 5)) // 15

//* Variable swapping
let x = 10
let y = ((20)[(x, y)] = [y, x])
console.log(x) // 20
console.log(y) // 10

//* Dynamic property names in objects
const rando = randomKey()

const obj4 = {
  [rando]: 123,
}

const { [rando]: myKey } = obj4
console.log(myKey) // 123
