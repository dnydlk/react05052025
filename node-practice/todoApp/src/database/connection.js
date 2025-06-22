import Sequelize from "sequelize"

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
  }
)

let connection = null

export const connectDatabase = async () => {
  if (connection) return connection
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
    connection = sequelize
    return connection
  } catch (error) {
    console.error("Unable to connect to the database: ", error)
    throw error
  }
}
