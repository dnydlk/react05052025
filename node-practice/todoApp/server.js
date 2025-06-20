import express from "express"
import { comparePassword, hashPassword } from "./utils/bcrypt.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { authenticateToken } from "./utils/middlewares/jwt.js"

const app = express()
const port = 3000

app.use(express.json())

dotenv.config()

const posts = [
  {
    username: "Kyle",
    title: "Post 1",
  },
  {
    username: "Jim",
    title: "Post 2",
  },
]

const users = []

app.get("/posts", authenticateToken, (req, res) => {
  console.log("📌 ~ app.get ~ req.user:", req.user)
  // return the posts created by current user only
  res.json(posts.filter((p) => p.username === req.user.name))
})

app.get("/users", (req, res) => {
  // https://www.youtube.com/watch?v=Ud5xKCYQTjM
  res.json(users)
})

app.post("/users", async (req, res) => {
  try {
    const hashedPassword = await hashPassword(req.body.password)
    //#1 Create a new user
    //#2 Hash the password
    //#3 Save to Database(for now its user variable)
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

//- bcrypt only
app.post("/login", async (req, res) => {
  //#1 Authenticae User
  // Find the usuer from db
  const user = users.find((u) => u.name === req.body.name)
  console.log("📌 ~ app.post ~ user:", user)
  if (!user) return res.status(404).json({ error: "User not found" })

  try {
    // Compare password
    if (await comparePassword(req.body.password, user.password)) {
      //#2 JWT Authentication
      const payload = { name: user.name }
      const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET)
      console.log("📌 ~ app.post ~ payload:", payload)
      res.status(200).json({ accessToken })
    } else {
      res.status(401).json({ error: "Wrong password" })
    }
  } catch (error) {
    console.error("Failed:", error)
    res.sendStatus(500)
  }
})

app.get("/login", (req, res) => {
  // Authenticate the user
})

app.listen(port, () => console.log(`Listening on port ${port}`))
