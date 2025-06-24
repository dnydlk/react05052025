import { User } from "../database/connection.js"

const getUserByUsername = async (username) => {
  return await User.findOne({ where: { username } })
}

const getUserByEmail = async (email) => {
  return await User.findOne({ where: { email } })
}

const createUser = async (userData) => {
  return await User.create(userData)
}

const userRepo = {
  getUserByUsername,
  getUserByEmail,
  createUser,
}

export default userRepo;