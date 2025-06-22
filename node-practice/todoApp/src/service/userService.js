// await createUser({username, email, password})

export const createUser = async (user) => {
  const { username, email, password } = user || {}
  const _user1 = await userRepo.getUserByUserName(username)
  if (_user1) {
    throw new Error("Username already exists")
  }
  const _user2 = await userRepo.getUserByEmail(username)
}
