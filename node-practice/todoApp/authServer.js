import express from "express"
import { comparePassword } from "./utils/bcrypt.js"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { users } from "./database/index.js"

const app = express()
const port = 4000

app.use(express.json())

dotenv.config()

let refreshTokens = []

app.post("/token", (req, res) => {
  const refreshToken = req.body.refreshToken
  if (!refreshToken) return res.sendStatus(401)
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken({ name: user.name })
    return res.json({ accessToken })
  })
})

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((t) => t !== req.body.refreshToken)
  res.sendStatus(204)
})

app.post("/login", async (req, res) => {
  //#1 Authenticae User
  // Find the usuer from db
  const user = users.find((u) => u.name === req.body.name)
  console.log("📌 ~ authServer.js:18 ~ app.post ~ user:", user)
  if (!user) return res.status(404).json({ error: "User not found" })

  try {
    // Compare password
    if (await comparePassword(req.body.password, user.password)) {
      //#2 JWT Authentication
      const payload = { name: user.name }
      const accessToken = generateAccessToken(payload)
      console.log("📌 ~ app.post ~ payload:", payload)
      const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
      refreshTokens.push(refreshToken)
      res.status(200).json({ accessToken, refreshToken })
    } else {
      res.status(401).json({ error: "Wrong password" })
    }
  } catch (error) {
    console.error("Failed:", error)
    res.sendStatus(500)
  }
})

function generateAccessToken(payload) {
  return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "10s" })
}

app.listen(port, () => console.log(`Auth Server listening on port ${port}`))
