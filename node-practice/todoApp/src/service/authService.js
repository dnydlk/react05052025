import userRepo from "../repository/userRepo.js"
import { comparePassword, generateAccessToken, generateRefreshToken } from "../utils/index.js"

const login = async (username, password) => {
  // Find the user from db
  const user = await userRepo.getUserByUsername(username)
  console.log("📌 ~ authService.js:6 ~ login ~ user:\n\t", user)
  if (!user) throw new Error("User not found")

  // Compare password
  if ((await comparePassword(password, user.password)) === false) {
    throw new Error("Invalid password")
  }

  // Generate access and refresh tokens
  const userPayload = { id: user.id, username: user.username }
  const accessToken = generateAccessToken(userPayload)
  const refreshToken = generateRefreshToken(userPayload)

  return { token: { accessToken, refreshToken }, user: userPayload }
}

const authService = { login }

export default authService
