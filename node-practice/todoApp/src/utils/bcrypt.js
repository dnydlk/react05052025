import bcrypt from "bcrypt"

const saltRounds = 10

export const hashPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, saltRounds)
    // console.log("📌 ~ bcrypt.js:8 ~ hashPassword ~ hash:\n\t", hash)
    return hash
  } catch (error) {
    console.error("Failed to hash password:", error)
  }
}

export const comparePassword = async (password, hashedPassword) => {
  try {
    const result = await bcrypt.compare(password, hashedPassword)
    console.log("📌 ~ bcrypt.js:18 ~ comparePassword ~ result: ", result)
    return result
  } catch (error) {
    console.error("Failed to compare password:", error)
  }
}

const example = async () => {
  const myPlaintextPassword = "1234"
  const someOtherPlaintextPassword = "qwer"
  const myHashedPassword = await hashPassword(myPlaintextPassword)

  await comparePassword(myPlaintextPassword, myHashedPassword)
  await comparePassword(someOtherPlaintextPassword, myHashedPassword)
}
