import authService from "../service/authService.js"

export const login = async (req, res) => {
  const { username, password } = req.body || {}
  try {
    const { token, user } = await authService.login(username, password)
    res
      .cookie("token", token, { httpOnly: true })
      .status(200)
      .json({ message: "Login successful", user })
  } catch (error) {
    console.error("Error: ", error.message)

    if (error.message === "User not found" || error.message === "Invalid password") {
      return res.status(401).json({ message: "Invalid credentials" })
    }

    return res.status(500).json({ message: error.message })
  }
}
