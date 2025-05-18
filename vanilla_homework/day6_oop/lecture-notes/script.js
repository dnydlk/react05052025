// W1D1

//- 1
// const arr1 = [1,2,3]
// const arr2 = [...arr1]

// console.log(arr1);
// console.log(arr2);
// todo: shallow & deep copy in JS?

//- 2
// How to deep copy
// JSON stringnify, then JSON parse
// aka: serilization

// downside?
// 1. all function of undefiended body will gone
//  why -> bkend & ftend isue?
// JSON javscript object notation
// js JSON might not work on other languages

// 2. for large data, JSON.stringnify is slow
// alternatives
// third party: nodash?
// or https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone

// why we can use JSON.parse
// from JSON class, aka prototype method
// Static method

//- 3 create an object
// key: string
// const obj = {
//   name: "Dan",
//   age: 27,
// }
// destructure
// const {name} = obj
// console.log(name);
// access key1
// console.log(obj.name)
// const name1 = obj.name
// console.log(obj["name"]); // noice, add this to anki please
// console.log(obj["age"]);

// const p1 = { name: "Dan" }
// const p2 = { name: "Tom" }

// const {name: name1} = p1
// const {name: name2} = p2

//- 3
// function foo() {
//   return 5
// }
// console.log(foo); // function definition
// console.log(foo()); // return value of 5

// console.log(typeof foo);
// console.log(typeof foo());

//
// function foo() {
//   return function bar() {
//     return 5
//   }
// }
// console.log(foo()); // [Function: bar]
// console.log(foo()()); // 5  aka: querying?

//
// function foo() {

// }
// console.log(foo()); // return notion -> undefined

//
// function foo(a) {
//   console.log("a", a);
// }
// console.log(foo());

//
// const obj2 = {a:1}
// console.log(obj2.b); // undefined
// console.log(c); // Error: ReferenceError: c is not defined
// // in js undefined is not an error

// - 4
// function foo() {
//   function bar() {
//     console.log("bar");
//   }
//   bar()
// }
// foo()
// bar()
// nestest bar() cannot be accessed outside of function scope foo()

// ternary operator
// const a = 1
// const b = 2
// const c = a + b > 2 ? true : false
// console.log(c)
// const d = a + b > 2 ? "larger than 2" : a + b <= 2 ? "less than 2" : "something else"

//
// function checkNum(n) {
//   return n === 0 ? "zero" : n > 0 ? "positive" : "negative"
// }
// console.log(checkNum(1))
// best: use two tenary operator for three different outcome max
// functional programming, explain the function by the function name -> checkNum

//
// const a = 1
// const b = 1
// const c = 1
// if ((a === b) === c) {
//   console.log("true")
// } else {
//   console.log("false") // false
// }
// for if statements, alwasy add the else for it to be able to return something
// js syntex is allowed, but why not true?
// -- we're not comparing 3 of them at the same time
// -- a === b === c is true === c
//
// if ((a == b) == c) {
//   console.log("true") // true
// } else {
//   console.log("false")
// }
// type coerrsion
//
// if ((a === b) == c) {
//   console.log("true") // false
// } else {
//   console.log("false")
// }

//- 5
// const nums = [1, 2, 3, 4, 5]
// const oddNums = nums.filter((num) => num % 2 === 1)
// console.log(oddNums);
// filter takes a call back function, type is Function

//- 6
// const obj = {}

// console.log(obj.toString) // Object.prototype.toString()

// const a = { foo: "foo"}
// const b = { __proto__: a}
// console.log(b.foo);

//
// console.log([1].forEach === [].forEach) // true 
// comparing function, we're comparing reference
