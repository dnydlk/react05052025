import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const authenticateToken = (req, res, next) => {
  const accessToken = req.cookies.accessToken
  if (!accessToken) return res.status(401).json({ message: "Access token required" })

  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    console.error("Error verifying access token: ", error.message)
    req.status(403).json({ message: "Invalid or expired token" })
  }
}
