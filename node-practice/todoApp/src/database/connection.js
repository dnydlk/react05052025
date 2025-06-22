import Sequelize from "sequelize"
import userModel from "./models/user.model.js"
import todoModel from "./models/todo.model.js"

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOSTNAME,
    dialect: "mysql",
  }
)

const User = userModel(sequelize)
const Todo = todoModel(sequelize)

User.hasMany(Todo, { foreignKey: "user_id", onDelete: "CASCADE" })
Todo.belongsTo(User, { foreignKey: "user_id" })

let connection = null

export const connectDatabase = async () => {
  if (connection) return connection
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")

    await sequelize.sync()
    console.log("Database synced successfully.")

    connection = sequelize
    return connection
  } catch (error) {
    console.error("Unable to connect to the database: ", error)
    throw error
  }
}

export { sequelize, User, Todo }
