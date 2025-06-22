import express from "express"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { authenticateToken } from "./src/middlewares/jwt.js"
import { posts, users } from "./src/database/index.js"
import { generateAccessToken, hashPassword, comparePassword } from "./src/utils/index.js"
import { connectDatabase } from "./src/database/connection.js"
import { userRoute, authRoute } from "./src/routes/index.js"

dotenv.config()

const port = process.env.PORT || 3000

;(async () => {
  await connectDatabase()

  const app = express()
  app.use(express.json())
  app.use(cookieParser())
  app.use(cors({ origin: "*" }))

  app.use("/users", userRoute)
  app.use("/auth", authRoute)

  app.listen(port, () => console.log(`Server listening on port ${port}`))
})()

// in-memory refresh token storage (temporarily)
let refreshTokens = []

//- Log in
// app.post("/login", async (req, res) => {
//   // Find the user from db
//   const user = users.find((u) => u.name === req.body.name)
//   console.log("📌 ~ app.post ~ user:", user)
//   if (!user) return res.status(404).json({ error: "User not found" })

//   try {
//     // Compare password
//     if (await comparePassword(req.body.password, user.password)) {
//       // JWT Authentication
//       const payload = { name: user.name }
//       const accessToken = generateAccessToken(payload)
//       console.log("📌 ~ server.js:32 ~ app.post ~ payload:\n\t", payload)
//       const refreshToken = jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET)
//       refreshTokens.push(refreshToken)
//       res.status(200).json({ accessToken, refreshToken })
//     } else {
//       res.status(401).json({ error: "Wrong password" })
//     }
//   } catch (error) {
//     console.error("Failed:", error)
//     res.sendStatus(500)
//   }
// })

//- Refresh access token
// app.post("/token", (req, res) => {
//   const refreshToken = req.body.refreshToken
//   if (!refreshToken) return res.sendStatus(401)
//   if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403)
//   jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     const accessToken = generateAccessToken({ name: user.name })
//     return res.json({ accessToken })
//   })
// })

//- Log out
// app.delete("/logout", (req, res) => {
//   refreshTokens = refreshTokens.filter((t) => t !== req.body.refreshToken)
//   res.sendStatus(204)
// })

//- Get all users
// app.get("/users", (req, res) => {
//   res.json(users)
// })

//- Get posts by current user
// app.get("/posts", authenticateToken, (req, res) => {
//   console.log("📌 ~ index.js:87 ~ app.get ~ req.user:\n\t", req.user)
//   // return the posts created by current user only
//   res.json(posts.filter((p) => p.username === req.user.name))
// })

// app.listen(port, () => console.log(`Server listening on port ${port}`))
