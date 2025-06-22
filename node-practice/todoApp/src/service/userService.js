import shortid from "shortid"
import userRepo from "../repository/userRepo.js"
import { hashPassword } from "../utils/bcrypt.js"

export const createUser = async (user) => {
  const { username, email, password } = user || {}

  const existingUserByUsername = await userRepo.getUserByUsername(username)
  if (existingUserByUsername) {
    throw new Error("Username already exists")
  }

  const existingUserByEmail = await userRepo.getUserByEmail(email)
  if (existingUserByEmail) {
    throw new Error("Email already exists")
  }

  const newUser = {
    id: shortid.generate(),
    username,
    email,
    password: await hashPassword(password),
  }

  await userRepo.createUser(newUser)

  const { password: _, ...userInfo } = newUser

  return userInfo
}

const userService = { createUser }

export default userService
