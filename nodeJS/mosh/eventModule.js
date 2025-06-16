const EventEmitter = require("events")
const emmiter = new EventEmitter()

// Register a listener
emmiter.on("messageLogged", (arg) => {
  console.log("Listener Called with ", arg)
})

// // Raise an event
// emmiter.emit("messageLogged", { id: 1, url: "http://" })

const log = require("./logger")
log("message")
