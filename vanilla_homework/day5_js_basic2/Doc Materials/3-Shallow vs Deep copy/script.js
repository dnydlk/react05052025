// https://www.youtube.com/watch?v=4Ej0LwjCDZQ
const xArray = [1, 2, 3, 4, 5]
const yArray = [1, 2, 3, 4, 5]
const zArray = [...yArray, 10]
console.log(yArray) // [ 1, 2, 3, 4, 5 ]
console.log(zArray) // [ 1, 2, 3, 4, 5, 10 ]

console.log(xArray === yArray) // true
console.log(xArray === zArray) // false

// With Object.assign()
const tArray = Object.assign([], xArray)
console.log(tArray) // [ 1, 2, 3, 4, 5 ]
console.log(tArray === xArray) // false
tArray.push(11)

// Deep copy
const scoreObj = {
  player1: {
    name: "Alice",
    score: 10,
  },
  player2: {
    name: "Bob",
    score: 20,
  },
}
const deepCopyScoreObj = JSON.parse(JSON.stringify(scoreObj))
console.log(deepCopyScoreObj) // { player1: { name: 'Alice', score: 10 }, player2: { name: 'Bob', score: 20 } }
console.log(deepCopyScoreObj === scoreObj) // false
// But this method does not work with Datas, functions, undefined, Infinity, RegExps, Maps, Sets, Blobs, FileLists, ImageData, and other complex types.

// Custom deep clone function
// This function will recursively clone an object or array
// name: deepClone
const deepClone = (obj) => {
  if (typeof obj !== "object" || obj === null) return obj
  // Return the value if obj is not an object or is null

  // Create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {}

  // Recursively copy for nested objects and arrays
  for (const key in obj) {
    const value = obj[key]
    newObject[key] = deepClone(value)
  }

  return newObject
}

const newScoreObj = deepClone(scoreObj)
console.log(newScoreObj) // { player1: { name: 'Alice', score: 10 }, player2: { name: 'Bob', score: 20 } }
console.log(newScoreObj === scoreObj) // false

const pureAddToScoreHistory = (array, score, cloneFn) => {
  const newArray = cloneFn(array)
  newArray.push(score)
  return newArray
}
