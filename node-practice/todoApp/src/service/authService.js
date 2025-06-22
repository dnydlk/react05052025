const login = async (username, password) => {
  // Find the user from db
  const user = users.find((u) => u.name === username)
  console.log("📌 ~ app.post ~ user:", user)
  if (!user) return res.status(404).json({ error: "User not found" })

  try {
    // Compare password
    if (await comparePassword(password, user.password)) {
      // JWT Authentication
      const payload = { name: user.name }
      const accessToken = generateAccessToken(payload)
      console.log("📌 ~ server.js:32 ~ app.post ~ payload:\n\t", payload)
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
}
