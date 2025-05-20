//- eg1 scope
// if (true) {
//   var varVariable = "This is true"
// }

// console.log(varVariable) // This is true

// if (true) {
//   let letVariable = "This is true"
// }

// console.log(letVariable) // ReferenceError: letVariable is not defined

//- eg2 redecale
// var varVariable = "This is true"
// var varVariable = "This is false"
// console.log(varVariable) // This is false

// let letVariable = "This is true"
// let letVariable = "This is false"
// console.log(letVariable) // SyntaxError: Identifier 'letVariable' has already been declared

//- eg3
// console.log(varVariable) // undefined
// var varVariable = "This is true"
// console.log(letVariable) // ReferenceError: letVariable is not defined
// let Variable = "This is true"

//- eg4
// const constVar = 1
// let letVar = 1
// constVar = 2
// letVar = 3
// TypeError: Assignment to constant variable.

//- eg5 const
const constObj = { name: "Bob" }
console.log(constObj)
constObj.name = "Daniyal"
console.log(constObj)
// { name: 'Bob' }
// { name: 'Daniyal' }
