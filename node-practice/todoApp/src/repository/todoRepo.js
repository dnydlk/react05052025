import { Todo } from "../database/connection.js"

const getTodosByUserId = async (userId) => {
  return await Todo.findAll({
    where: { user_id: userId },
    order: [["createdAt", "DESC"]],
  })
}

const getTodosById = async (todoId, userId) => {
  return await Todo.findOne({ where: { id: todoId, user_id: userId } })
}

const createTodo = async (todoData) => {
  return await Todo.create(todoData)
}

const updateTodo = async (todoId, userId, updates) => {
  const todo = await Todo.findOne({
    where: {
      id: todoId,
      user_id: userId,
    },
  })

  if (!todo) {
    return null
  }

  await todo.update(updates)
  return todo
}

const deletedTodo = async (todoId, userId) => {
  return await Todo.destroy({
    where: {
      id: todoId,
      user_id: userId,
    },
  })
}

const todoRepo = {
  getTodosByUserId,
  getTodosById,
  createTodo,
  updateTodo,
  deletedTodo,
}

export default todoRepo
