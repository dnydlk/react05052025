//- 1
// writes an example of a closure that generates a random number
// between 0 and 100 with initiated and logs the password is "##" when invoked

// function passwordGenerater() {
//   const password = Math.floor(Math.random() * 100)
//   return function () {
//     console.log(`The Password is ${password}`)
//   }
// }

// const myPassword = passwordGenerater()
// myPassword()
// myPassword()

// const myPassword2 = passwordGenerater()
// myPassword2()
// myPassword2()

//- 2
// Modify the closure above to memoize an objective of name <-> passcode pairs,
// and log a passcode for a given name from cache.
// For instance, every time 'logPasscode('peter')' is run,
// the function should log "The passcode is ##" with the specific passcode
// generated for 'Peter';
// function passwordGenerater() {
//   const passwords = {}
//   return function (name) {
//     if (name === undefined) return console.log("Must provide name");
//     if (!passwords[name]) {
//       passwords[name] = Math.floor(Math.random() * 100)
//     }
//      console.log(`The Password for ${name} is ${passwords[name]}`)
//   }
// }

// const logPasscode = passwordGenerater()
// logPasscode()
// logPasscode("Peter")
// logPasscode("Peter")
// logPasscode("Dan")
// logPasscode("Dan")

//- 3
// After 5 seconds, the password should expire and user should get a message
//* use a expired time as var to check
function passwordGenerater() {
  const passwords = {}
  
  return function (inputName) {
    if (inputName === undefined) return console.log("Must provide name")

    if (!passwords[inputName]) {
      const password = Math.floor(Math.random() * 100)
      const expireDate = Date.now() + 1000
      passwords[inputName] = { password, expireDate }
    }

    if (passwords[inputName].expiredDate < Date.now()) {
      const password = Math.floor(Math.random() * 100)
      const expireDate = Date.now() + 1000
      passwords[inputName] = { password, expireDate }
      console.log(
        `Password expired for ${inputName}, \nbut don't worry, a new password is generated: ${passwords[inputName]["password"]}`
      )
    } else
      console.log(`The Password for ${inputName} is ${passwords[inputName].password}`)
  }
}

const logPasscode = passwordGenerater()
logPasscode("Peter")
setTimeout(() => {
  logPasscode("Peter")
}, 3000)

//- pw expired, everytime access within expiration date will prolong the expiredDate
//- option to change the password 
//- encryp the password
//- ask gpt for improvement
//- ask gpt for differnent requirement 

//- debounce & throttle, LT 30 JS challenge 