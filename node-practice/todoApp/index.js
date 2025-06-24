import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import { authenticateToken } from "./src/middlewares/authentication.js"
import { connectDatabase } from "./src/database/connection.js"
import { userRoute, authRoute, todoRoute } from "./src/routes/index.js"

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
  app.use("/todos", todoRoute)

  app.listen(port, () => console.log(`Server listening on port ${port}`))
})()
