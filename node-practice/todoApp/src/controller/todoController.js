import todoService from "../service/todoService.js"

export const getTodosByUser = async (req, res) => {
  try {
    const userId = req.user.id

    const todos = await todoService.getTodosByUser(userId)

    res.status(200).json({
      message: "Todos retrieved successfully",
      count: todos.length,
      todos,
    })
  } catch (error) {
    console.error("Error getting todos: ", error)
    res.status(500).json({ message: "Failed to retrieve todos" })
  }
}

export const createTodo = async (req, res) => {
  try {
    const userId = req.user.id
    const todoData = req.body
    const newTodo = await todoService.createTodo(userId, todoData)
    res.status(201).json({
      message: " Todo created successfully",
      todo: newTodo,
    })
  } catch (error) {
    console.error("Error creating new todo: ", error)
    if (error.message === "Todo title is required") {
      return res.status(400).json({ message: error.message })
    }
    return res.status(500).json({ message: "Failed to create todo" })
  }
}

export const updateTodo = async (req, res) => {
  try {
    const userId = req.user.id
    const todoId = req.params.todoId
    const updates = req.body
    const updatedTodo = await todoService.updateTodo(todoId, userId, updates)
    res.status(200).json({
      message: " Todos updated successfully",
      todo: updatedTodo,
    })
  } catch (error) {
    console.error("Update todo error:", error)

    if (error.message === "Todo not found or unauthorized") {
      return res.status(404).json({ message: error.message })
    }

    if (error.message === "No valid fields to update") {
      return res.status(400).json({ message: error.message })
    }

    res.status(500).json({ message: "Failed to update todo" })
  }
}

export const getTodoById = async (req, res) => {
  try {
    const userId = req.user.id
    const todoId = req.params.todoId
    
    const todo = await todoService.getTodoById(todoId, userId)
    
    res.status(200).json({
      message: "Todo retrieved successfully",
      todo
    })
  } catch (error) {
    console.error("Get todo error:", error)
    
    if (error.message === 'Todo not found or unauthorized') {
      return res.status(404).json({ message: error.message })
    }
    
    res.status(500).json({ message: "Failed to retrieve todo" })
  }
}

export const deleteTodo = async (req, res) => {
  try {
    const userId = req.user.id
    const todoId = req.params.todoId
    
    await todoService.deleteTodo(todoId, userId)
    
    res.status(200).json({
      message: "Todo deleted successfully"
    })
  } catch (error) {
    console.error("Delete todo error:", error)
    
    if (error.message === 'Todo not found or unauthorized') {
      return res.status(404).json({ message: error.message })
    }
    
    res.status(500).json({ message: "Failed to delete todo" })
  }
}
