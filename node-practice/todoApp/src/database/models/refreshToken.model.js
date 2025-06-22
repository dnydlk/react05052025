import { DataTypes } from "sequelize"

export const refreshTokenModel = (sequelize) => {
  const RefreshToken = sequelize.define(
    "RefreshToken",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING(500),
        allowNull: false,
        unique: true,
      },
      expires_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: "refresh_tokens",
      timestamps: true,
      updatedAt: false,
    }
  )

  return RefreshToken
}
