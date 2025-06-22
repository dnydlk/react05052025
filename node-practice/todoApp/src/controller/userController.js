import userService from "../service/userService.js"

export const signup = async (req, res) => {
  const { username, email, password } = req.body
  if (!username || !email || !password) {
    return res.status(400).json({ message: "Username, email and password area required" })
  }

  try {
    const userInfo = await userService.createUser({ username, email, password })
    res.status(201).json({
      message: "User registered successfully",
      user: userInfo,
    })
  } catch (error) {
    console.error("Error :", error)
    return res.status(500).json({ message: error.message })
  }
}
