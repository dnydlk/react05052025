const EventEmitter = require("events")

// A module for logging messages
let url = "http://mylogger.in/log"

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message)

    // Raise an event
    this.emit("messageLogged", { id: 1, url: "http://" })
  }
}

//* url and log() are module scoped

// exporting an object
// module.exports.log = log
// module.exports.url = url
// module.exports.endPoint = url // renamed = og name
// since url is implementation detail, no need to export it

// exporting a class
module.exports = Logger
