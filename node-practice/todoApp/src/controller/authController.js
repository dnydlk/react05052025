import authService from "../service/authService.js"

const accessTokenExpireTime = 1000 * 10
const refreshTokenExpireTime = 1000 * 60 * 60 * 24 * 7

export const login = async (req, res) => {
  const { username, password } = req.body || {}
  try {
    const { token, user } = await authService.login(username, password)
    res
      .cookie("accessToken", token.accessToken, {
        httpOnly: true,
        maxAge: accessTokenExpireTime,
      })
      .cookie("refreshToken", token.refreshToken, {
        httpOnly: true,
        maxAge: refreshTokenExpireTime,
      })
      .status(200)
      .json({
        message: "Login successful",
        user,
        tokens: token, //![todo] Only for testing on Postman
      })
  } catch (error) {
    console.error("Error: ", error.message)

    if (error.message === "User not found" || error.message === "Invalid password") {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    return res.status(500).json({ message: error.message })
  }
}

export const logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken
  console.log("📌 ~ authController.js:31 ~ logout ~ refreshToken:\n\t", refreshToken)
  try {
    if (refreshToken) await authService.logout(refreshToken)

    res
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .status(200)
      .json({ message: "Logged out successfully" })
  } catch (error) {
    console.error("Error: ", error)
    // Still clear cookies even if DB operations fails
    res
      .clearCookie("accessToken")
      .clearCookie("refreshToken")
      .status(200)
      .json({ message: "Logged out successfully" })
  }
}

export const refresh = async (req, res) => {
  const refreshToken = req.cookies.refreshToken
  if (!refreshToken) return res.status(401).json({ message: "Refresh token required" })

  try {
    const newAccessToken = await authService.refreshAccessToken(refreshToken)

    res
      .cookie("accessToken", newAccessToken, {
        httpOnly: true,
        maxAge: accessTokenExpireTime,
      })
      .status(200)
      .json({
        message: "New accessToken generated.",
        refreshToken, //![todo] Only for testing on Postman
      })
  } catch (error) {
    console.error("Refresh error:", error.message)
    return res.status(403).json({ message: error.message })
  }
}
