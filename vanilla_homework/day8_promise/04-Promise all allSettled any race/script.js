// [info] https://www.youtube.com/watch?v=LE_L9OAh6Hk&t
// - 1 Promise

const myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async task 1")
    // reject("Async task 1 REJECTED")
  }, 500)
})

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async task 2")
    // reject("Async task 2 REJECTED")
  }, 1000)
})

const myPromise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Async task 3")
    // reject("Async task 3 REJECTED")
  }, 2000)
})

const myPromises = [myPromise1, myPromise2, myPromise3]

// * Promise.all() - waits for all promises to resolve or rejects if any promise is rejected
// Promise.all(myPromises)
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error!"))

// * Promise.allSettled() - waits for all promises to settle (resolve or reject) and returns an array of results
// Promise.allSettled(myPromises)
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error!"))

// * Promise.any() - returns the first fulfilled promise, ignores rejections
// Promise.any(myPromises)
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error!"))

// * Promise.race() - returns the first settled promise (either resolved or rejected), ignores others
// Promise.race(myPromises)
//   .then((res) => console.log(res))
//   .catch((err) => console.log("Error!"))

// * Promise.resolve() - creates a resolved promise
const resolvedPromise = Promise.resolve("Resolved Promise")
resolvedPromise.then((res) => console.log(res)).catch((err) => console.log("Error!"))
