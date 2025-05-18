// W2D3

//
//*
//-
//? da
//todo

//- IIFE
// function foo() {

// }
// foo()
// //
// (function foo() {})()
//* Know the concept & practice more

//- forEach()
// ;[1, 2, 3].forEach((num, index, arr) => {
//   console.log("current num: " + num);
//   console.log("current index: " + index)
//   console.log("current array: " + arr)
//   console.log("\n");
// })

//
// Array.prototype.sayHi = function() {
//   console.log("Hi");
// }
// console.log([].sayHi); // return function definition with undefiend
// console.log([].sayHi()); // return "Hi" with undefined

const arr = [1, 2, 3]

//- myforEach()
Array.prototype.myForEach = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    callbackFn(this[i], i, this)
  }
}

// console.log("\nmyForEach:")
// arr.myForEach((element, index, array) => {
//   console.log(`Element: ${element} Index: ${index} Array: [${array}]`)
// })

//- myMap()
Array.prototype.myMap = function (callbackFn) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    res.push(callbackFn(this[i], i, this))
  }
  console.log(`Output array: [${res}]`)
  return res
}
// console.log("\nmyMap:")
// const myMapResult = arr.myMap((element, index, array) => {
//   console.log(`Element: ${element} Index: ${index} Array: [${array}]`)
//   return element * 2
// })

//- myFilter()
Array.prototype.myFilter = function (callbackFn) {
  const res = []
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) {
      res.push(this[i])
    }
  }
  console.log(`Output array: [${res}]`)
  return res
}
// console.log("\nmyFilter")
// const myFilterResult = arr.myFilter((element, index, array) => {
//   console.log(`Element: ${element} Index: ${index} Array: [${array}]`)
//   return element % 2 === 1
// })

//- myReduce()
Array.prototype.myReduce = function (callbackFn, initialValue) {
  let accumulator = initialValue
  let currentIndex = 0

  if (accumulator === undefined) {
    accumulator = this[0]
    currentIndex = 1
  }

  for (let i = currentIndex; i < this.length; i++) {
    accumulator = callbackFn(accumulator, this[i], i, this)
  }
  console.log(`res: ${accumulator}`)
  return accumulator
}
// console.log("\nmyReduce with initialValue")
// const myReduceResult1 = arr.myReduce((accumulator, currentValue) => {
//   console.log(`Accumulator: ${accumulator} CurrentValue: ${currentValue}`)
//   return accumulator + currentValue
// }, 0)

// console.log("\nmyReduce without initialValue")
// const myReduceResult2 = arr.myReduce((accumulator, currentValue) => {
//   console.log(`Accumulator: ${accumulator} CurrentValue: ${currentValue}`)
//   return accumulator + currentValue
// })

//- myConcat()
Array.prototype.myConcat = function (...inputs) {
  const res = []
  for (const each of this) {
    res.push(each)
  }
  if (inputs !== undefined) {
    for (const input of inputs) {
      // Array.isArray(input) source:
      if (Array.isArray(input)) {
        for (const each of input) {
          res.push(each)
        }
      } else res.push(input)
    }
  }
  return res
}
const array1 = ["a", "b", "c"]
const array2 = ["d", "e", "f"]
const array3 = ["g", "h", "i"]
// console.log("\nmyConcat")
// const myConcatResult1 = array1.myConcat(array2)
// const myConcatResult2 = array1.myConcat(array2, array3)
// const myConcatResult3 = array1.myConcat(array2, array3, 4)
// console.log(myConcatResult1)
// console.log(myConcatResult2)
// console.log(myConcatResult3)

//- myFind()
Array.prototype.myFind = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) return this[i]
  }
  return undefined
}
// console.log("\nmyFind")
// const myFindResult1 = arr.myFind((element, index, array) => element >= 2)
// const myFindResult2 = arr.myFind((element, index, array) => element > 3)
// console.log(myFindResult1)
// console.log(myFindResult2)

//- myEvery()
Array.prototype.myEvery = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (!callbackFn(this[i], i, this)) return false
  }
  return true
}
// console.log("\nmyEvery")
// const myEveryResult1 = arr.myEvery((element, index, array) => element >= 1)
// const myEveryResult2 = arr.myEvery((element, index, array) => element > 1)
// console.log(myEveryResult1)
// console.log(myEveryResult2)

//- mySome()
Array.prototype.mySome = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i], i, this)) return true
  }
  return false
}
// console.log("\nmySome")
// const mySomeResult1 = arr.mySome((element, index, array) => element >= 3)
// const mySomeResult2 = arr.mySome((element, index, array) => element > 3)
// console.log(mySomeResult1)
// console.log(mySomeResult2)

//- myInclude()
Array.prototype.myInclude = function (searchElement, fromIndex) {
  let searchIndedx
  if (fromIndex !== undefined) {
    searchIndedx = fromIndex
  } else searchIndedx = 0

  for (let i = searchIndedx; i < this.length; i++) {
    if (this[i] === searchElement) return true
  }
  return false 
}
// console.log("\nmyInclude")
// const myIncludeResult1 = arr.myInclude(3)
// const myIncludeResult2 = arr.myInclude(4)
// const myIncludeResult3 = arr.myInclude(2, 1)
// const myIncludeResult4 = arr.myInclude(2, 3)
// console.log(myIncludeResult1)
// console.log(myIncludeResult2)
// console.log(myIncludeResult3)
// console.log(myIncludeResult4)

//- myJoin()
Array.prototype.myJoin = function (separator) {
  let res = ""
  for (let i = 0; i < this.length - 1; i++) {
    res += this[i]
    res += separator !== undefined ? separator : ","
  }
  res += this[this.length - 1]
  return res 
}
// console.log("\nmyJoin")
// const myJoinResult1 = array1.myJoin()
// const myJoinResult2 = array1.myJoin(" + ")
// console.log(myJoinResult1)
// console.log(myJoinResult2)

//- myPush()
Array.prototype.myPush = function (...elements) {
  if (Array.isArray(elements)) {
    for (const each of elements) {
      this[this.length] = each
    }
  } else this[this.length] = elements
  return this.length
}
// console.log("\nmyPush")
// const myPushResult1 = array1.myPush("!")
// console.log(array1)
// console.log(myPushResult1)
// const myPushResult2 = array1.myPush("?", "@", "#")
// console.log(array1)
// console.log(myPushResult2)

//- myReverse()
Array.prototype.myReverse = function () {
  let l = 0
  let r = this.length - 1
  while (l < r) {
    [this[l], this[r]] = [this[r], this[l]]
    l++
    r--
  }
}
// console.log("\nmyReverse")
// array1.myReverse()
// console.log(array1)
// array1.myReverse()
// console.log(array1)
