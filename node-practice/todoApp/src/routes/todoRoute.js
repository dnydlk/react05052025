import { Router } from "express"
import {
  createTodo,
  getTodosByUser,
  updateTodo,
  getTodoById,
  deleteTodo,
} from "../controller/todoController.js"
import { authenticateToken } from "../middlewares/authentication.js"

export const todoRoute = Router()

todoRoute.use(authenticateToken)

//- Get All todos by Current User
todoRoute.get("/", getTodosByUser)

//- Create a todo
todoRoute.post("/", createTodo)

//- Update a todo
todoRoute.patch("/:todoId", updateTodo)

//- Read a todo
todoRoute.get("/:todoId", getTodoById)

//- Delete a todos
todoRoute.delete("/:todoId", deleteTodo)
