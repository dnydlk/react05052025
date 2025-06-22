import tokenRepo from "../repository/tokenRepo.js"
import userRepo from "../repository/userRepo.js"
import {
  comparePassword,
  generateAccessToken,
  generateRefreshToken,
} from "../utils/index.js"

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

const authService = { login, logout }

export default authService


// // In refresh token function
// const storedToken = await tokenRepo.findRefreshTokenByUserIdAndToken(decoded.id, refreshToken);
