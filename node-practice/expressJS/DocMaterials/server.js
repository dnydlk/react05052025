// https://www.youtube.com/watch?v=SccSCuHhOw0&ab_channel=WebDevSimplified

import express from "express"
import userRouter from "./routes/users.js"

const app = express()

app.set("view engine", "ejs")
// use the middleware we defined
// app.use(logger)

app.get("/", (req, res) => {
  // console.log("Hello")
  // res.send("Hi")
  // res.sendStatus(403)
  // res.status(403).send("You're blocked!")
  // res.status(403).json({ message: "You're blocked!" })
  // res.json({ message: "Hello json!" })
  // res.download("server.js")
  // * render file
  res.render("index", {
    text: "this a the second parameter of res.render()",
  })
  // output: Error: No default engine was specified and no extension was provided.
  // no views engine
  // solution: npm install ejs -> views/index.ejs
})

app.use("/users", userRouter)

app.listen(3000)
