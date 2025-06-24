import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
} from "../utils/index.js"
import userRepo from "../repository/userRepo.js"
import tokenRepo from "../repository/tokenRepo.js"
dotenv.config()

const login = async (username, password) => {
  // Find the user from DB
  const user = await userRepo.getUserByUsername(username)
  console.log("📌 ~ authService.js:6 ~ login ~ user:\n\t", user.dataValues)
  if (!user) throw new Error("User not found")

  // Compare password
  if ((await comparePassword(password, user.password)) === false) {
    throw new Error("Invalid password")
  }

  // Generate access and refresh tokens
  const userPayload = { id: user.id, username: user.username }
  const accessToken = generateAccessToken(userPayload)
  const refreshToken = generateRefreshToken(userPayload)

  // Save refresh token to DB
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  await tokenRepo.createRefreshToken(user.id, refreshToken, expiresAt)

  return { token: { accessToken, refreshToken }, user: userPayload }
}

const logout = async (refreshToken) => {
  await tokenRepo.deleteRefreshToken(refreshToken)
}

const refreshAccessToken = async (refreshToken) => {
  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET)

    // Check if refresh token exists in DB
    const storedRefreshToken = await tokenRepo.findRefreshTokenByUserIdAndToken(
      decoded.id,
      refreshToken
    )

    if (!storedRefreshToken)
      throw new Error("Invalid refresh token: not found in database")

    console.log(
      "📌 ~ authService.js:47 ~ refreshAccessToken ~ storedRefreshToken:\n\t",
      storedRefreshToken.dataValues
    )

    // Check if refresh token is expired
    if (storedRefreshToken.expires_at && new Date() > storedRefreshToken.expires_at) {
      await tokenRepo.deleteRefreshToken(refreshToken)
      throw new Error("Refresh token expired")
    }

    // Generate new access token
    const userPayload = { id: decoded.id, username: decoded.username }
    const newAccessToken = generateAccessToken(userPayload)

    return newAccessToken
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      throw new Error("Invalid refresh token")
    }
    throw error
  }
}

const authService = { login, logout, refreshAccessToken }

export default authService
