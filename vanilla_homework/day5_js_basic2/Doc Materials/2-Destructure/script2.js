const alphabet = ["A", "B", "C", "D", "E", "F"]
const numbers = [1, 2, 3, 4, 5, 6]

const [a, , c, ...rest] = alphabet
console.log(a, c, rest) // A C [ 'D', 'E', 'F' ]

const newArray = [...alphabet, ...numbers]
// const newArray = aplhabet.concat(numbers)
console.log(newArray) // [ 'A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6 ]

function sumAndMultiply(a, b) {
  return [a + b, a * b]
}

const array = sumAndMultiply(2, 3)
console.log(array) // [ 5, 6 ]
const [sum, product] = sumAndMultiply(2, 3)
console.log(sum) // 5
console.log(product) // 6
// default values
const [sum2, product2 = 0] = sumAndMultiply(2, 3)

// Object destructuring
const person1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
}

const person2 = {
  name: "Jane",
  age: 25,
  address: {
    city: "Los Angeles",
    country: "USA",
  },
}

const {
  name: firstName,
  age: personAge,
  address: { city, country },
} = person1
console.log(firstName, personAge, city, country) // John 30 New York USA
const {
  name: firstName2,
  age: personAge2,
  address: { city: city2, country: country2 },
} = person2
console.log(firstName2, personAge2, city2, country2) // Jane 25 Los Angeles USA
