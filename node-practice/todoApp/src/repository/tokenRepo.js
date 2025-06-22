import { RefreshToken } from "../database/connection.js"

const createRefreshToken = async (userId, token, expiresAt) => {
  return await RefreshToken.create({
    user_id: userId,
    token,
    expires_at: expiresAt,
  })
}

const findRefreshToken = async (token) => {
  return await RefreshToken.findOne({
    where: { token },
  })
}

const findRefreshTokenByUserIdAndToken = async (userId, token) => {
  return await RefreshToken.findOne({
    where: {
      user_id: userId,
      token: token,
    },
  })
}

const deleteRefreshToken = async (token) => {
  return await RefreshToken.destroy({
    where: { token },
  })
}

const deleteAllUserRefreshTokens = async (userId) => {
  return await RefreshToken.destroy({
    where: { user_id: userId },
  })
}

export const tokenRepo = {
  createRefreshToken,
  findRefreshToken,
  findRefreshTokenByUserIdAndToken,
  deleteRefreshToken,
  deleteAllUserRefreshTokens,
}
