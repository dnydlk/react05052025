//- W3D11 Promise
//- 1
// const p = fetch("url") // returns a Promise
//   .then((res) => res.json()) // also returns a Promise
//   .then((data) => {
//     console.log(data)
//   })
// console.log(p)

//- 2
// fetch("https://dummyjson.com/posts")
//   .then((res) => res.json())
//   .then(console.log)

//- 3
// async function main() {
//   const res = await fetch("https://dummyjson.com/posts")
//   console.log(res)
// }

// main()

//- 4
// async function foo() {
//   return 5
// }

// console.log(foo()) // Promise { 5 }

//- 5
// hand made sleep func to show loading for react
