//- Global Object
// global.console.log("global console log")

//- Modules
// console.log(module) // Json Object
//* Every file is an module, and variables and functions in that module is module-scoped

//- Creating a Module: logger.js
//- Loading a module: require()
// const logger = require("./logger") // returns an object (see logger.js line 12)
// logger.log("logging")
const EventEmitter = require("events")
const Logger = require("./logger") // a function (see logger.js line 18)
const logger = new Logger()

logger.on("messageLogged", (arg) => {
  console.log("Listener Called with ", arg)
})

logger.log("message")
