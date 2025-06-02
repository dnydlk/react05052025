const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
  { name: "Keyboard", price: 25 },
]

//* Filter
const filteredItems = items.filter((i) => i.price <= 100)
// console.log(filteredItems)

//* Map
const nameOnlyItems = items.map((i) => i.name)
// console.log(nameOnlyItems)

//* Map
const foundItem = items.find((i) => i.name === "Book")
// console.log(foundItem)

//* ForEach
// items.forEach((i) => console.log(i.name))

//* Some
const hasInexpensiveItems = items.some((i) => i.price <= 5)
// console.log(hasInexpensiveItems)

//* Every
// console.log(items.some((i) => i.price <= 1000))

//* Reduce
const totalPrice = items.reduce((accumulator, item) => item.price + accumulator, 0)
// console.log(totalPrice)

//* Includes
const array = [1, 2, 3, 4, 5]
const includesTwo = array.includes(2)
console.log(includesTwo)
