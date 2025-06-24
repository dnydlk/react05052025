import shortid from "shortid"
import todoRepo from "../repository/todoRepo.js"

const getTodosByUser = async (userId) => {
  return await todoRepo.getTodosByUserId(userId)
}

const createTodo = async (userId, todoData) => {
  if (!todoData.title || todoData.title.trim() === "") {
    throw new Error("Todo title is required")
  }

  const newTodo = {
    id: shortid.generate(),
    user_id: userId,
    title: todoData.title.trim(),
    description: todoData.description || null,
    completed: false,
  }

  return await todoRepo.createTodo(newTodo)
}

const updateTodo = async (todoId, userId, updates) => {
  const allowedUpdates = ["title", "description", "completed"]
  const filteredUpdates = {}

  for (const key of allowedUpdates) {
    if (key in updates) {
      filteredUpdates[key] = updates[key]
    }
  }

  if (Object.keys(filteredUpdates).length === 0) {
    throw new Error("No valid fields to update")
  }

  const updatedTodo = await todoRepo.updateTodo(todoId, userId, filteredUpdates)

  if (!updatedTodo) {
    throw new Error("Todo not found or unauthorized")
  }

  return updatedTodo
}

const getTodoById = async (todoId, userId) => {
  const todo = await todoRepo.getTodosById(todoId, userId)

  if (!todo) throw new Error("Todo not found or unauthorized")

  return todo
}

const deleteTodo = async (todoId, userId) => {
  const deleted = await todoRepo.deletedTodo(todoId, userId)

  if (!deleted) {
    throw new Error("Todo nout found or unauthorized")
  }

  return deleted
}

const todoService = { getTodosByUser, createTodo, updateTodo, getTodoById, deleteTodo }

export default todoService
