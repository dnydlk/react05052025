const express = require("express")
const app = express()

app.use(logger)

app.get("/", (req, res) => {
  res.status(200).json({ message: "200 Success!" })
})

const userRouter = require("./routes/users")

app.use("/users", userRouter)

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

app.listen(3000)
