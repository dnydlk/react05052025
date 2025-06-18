import express from "express"
import shortid from "shortid"

const router = express.Router()

const todos = [
  { id: 0, title: "Do homework", completed: false },
  { id: 1, title: "Do Leetcode", completed: false },
  { id: 2, title: "Do Anki", completed: false },
]

router.get("/", (req, res) => {
  res.status(200).json({ message: "Todos", data: todos })
})

//- Create
router.post("/", (req, res) => {
  const { title } = req.body
  if (!title) return res.status(404).json({ error: "Title is required" })

  const newTodo = {
    id: shortid.generate(),
    title,
    completed: false,
  }

  todos.push(newTodo)
  res.status(201).json({ message: "New todo created", data: newTodo })
})

router
  .route("/:id")
  .get((req, res) => {
    //- Read
    const todoId = req.params.id
    const todo = todos.find((t) => t.id.toString() === todoId)
    if (!todo) return res.status(404).json({ message: "Todo not found" })
    res.status(200).json({ message: `Todo with ID: ${req.params.id}`, data: todo })
  })
  .put((req, res) => {
    //- Update
    const todoId = req.params.id
    const todoIndex = todos.findIndex((t) => t.id.toString() === todoId)
    if (todoIndex === -1) return res.status(404).json({ message: "Todo not found" })

    todos[todoIndex] = { ...todos[todoIndex], ...req.body }

    res
      .status(200)
      .json({ message: `Updated todo with ID: ${todoId}`, data: todos[todoIndex] })
  })
  .delete((req, res) => {
    //- Delete
    const todoId = req.params.id
    const todoIndex = todos.findIndex((t) => t.id.toString() === todoId)
    if (todoIndex === -1) return res.status(404).json({ message: "Todo not found" })

    todos.splice(todoIndex, 1)

    res.status(200).json({ message: `Deleted todo with ID: ${todoId}` })
  })

export default router
