import Sequelize from "sequelize"
import { userModel, todoModel, refreshTokenModel } from "./models/index.js"

// Set up Sequelize connection
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
  }
)

// Define models
const User = userModel(sequelize)
const Todo = todoModel(sequelize)
const RefreshToken = refreshTokenModel(sequelize)

// Define associations
User.hasMany(Todo, { foreignKey: "user_id", onDelete: "CASCADE" })
Todo.belongsTo(User, { foreignKey: "user_id" })
User.hasMany(RefreshToken, { foreignKey: "user_id", onDelete: "CASCADE" })
RefreshToken.belongsTo(User, { foreignKey: "user_id" })

let connection = null

export const connectDatabase = async () => {
  if (connection) return connection
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")

    // Sync models with the database, will create tables if they do not exist
    await sequelize.sync()
    console.log("Database synced successfully.")

    connection = sequelize
    return connection
  } catch (error) {
    console.error("Unable to connect to the database: ", error)
    throw error
  }
}

export { sequelize, User, Todo, RefreshToken }
