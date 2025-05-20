//- eg1
// function sumFunc(a, b) {
//   return a + b
// }

// const sumConst = (a, b) => a + b

// console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`)
// console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`)

//- eg2
console.log(`sumFunc(1, 2) => ${sumFunc(1, 2)}`)
console.log(`sumConst(3, 4) => ${sumConst(3, 4)}`)
// ReferenceError: Cannot access 'sumConst' before initialization

function sumFunc(a, b) {
  return a + b
}

const sumConst = (a, b) => a + b
