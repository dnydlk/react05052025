import { DataTypes } from "sequelize"

export const todoModel = (sequelize) => {
  const Todo = sequelize.define(
    "Todo",
    {
      id: {
        type: DataTypes.STRING(20),
        primaryKey: true,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      tableName: "todos",
      timestamps: true,
    }
  )

  return Todo
}
