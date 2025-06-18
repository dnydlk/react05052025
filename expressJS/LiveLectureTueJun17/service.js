import express from "express"
import shortid from "shortid"

const app = express()
const port = 3000
app.use(express.json())
const todos = [
  { id: 0, title: "Do homework", completed: false },
  { id: 1, title: "Do Leetcode", completed: false },
  { id: 2, title: "Do Anki", completed: false },
]

app.get("/", (req, res) => {
  res.status(200).json({ message: "app.get('/')" })
})

app.get("/todos", (req, res) => {
  res.status(200).json({ message: "Todos", data: todos })
})

app.post("/todos", (req, res) => {
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

app.get("/todos/:id", (req, res) => {
  const todo = todos.find((t) => t.id.toString() === req.params.id)
  if (!todo) return res.status(404).json({ message: "Todo not found" })
  res
    .status(200)
    .json({ message: `Todo with ID: ${req.params.id}`, data: todos[req.params.id] })
})

app.put("/todos/:id", (req, res) => {
  res.send(`Updated todo with ID: ${req.params.id}`)
})

app.delete("/todos/:id", (req, res) => {
  res.send(`Deleted todo with ID: ${req.params.id}`)
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
