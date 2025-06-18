import express from "express"
import todoRouter from "./routes/todos.js"

const app = express()
const port = 3000
app.use(express.json())
app.use("/todos", todoRouter)

app.get("/", (req, res) => {
  res.status(200).json({ message: "app.get('/')" })
})

app.listen(port, () => console.log(`Server listening on port ${port}`))
