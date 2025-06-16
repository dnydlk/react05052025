const fs = require("fs")

// fs.access(path, mode, callback) // Asynchronous
// fs.accessSync(path) // Synchronous

const files = fs.readdirSync("./")
// console.log(files)

fs.readdir("./", function (err, files) {
  if (err) console.warn(err)
  else console.log(files)
})
