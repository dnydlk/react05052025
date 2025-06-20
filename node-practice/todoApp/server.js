import express from "express"
import { hashPassword } from "./utils/bcrypt.js"
import dotenv from "dotenv"
import { authenticateToken } from "./middlewares/jwt.js"
import { posts, users } from "./database/index.js"

const app = express()
const port = 3000

app.use(express.json())

dotenv.config()

app.get("/posts", authenticateToken, (req, res) => {
  console.log("📌 ~ server.js:15 ~ app.get ~ req.user:\n\t", req.user)
  // return the posts created by current user only
  res.json(posts.filter((p) => p.username === req.user.name))
})

app.get("/users", (req, res) => {
  // https://www.youtube.com/watch?v=Ud5xKCYQTjM
  res.json(users)
})

app.post("/users", async (req, res) => {
  try {
    //#1 Create a new user
    //#2 Hash the password
    //#3 Save to Database(for now its user variable)
    const hashedPassword = await hashPassword(req.body.password)
    const user = {
      name: req.body.name,
      password: hashedPassword,
    }
    users.push(user)
    res.sendStatus(201)
  } catch (error) {
    console.error("Failed to create new user:", error)
    res.sendStatus(500)
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
