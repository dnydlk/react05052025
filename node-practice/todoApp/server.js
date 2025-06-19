import express from "express"
const app = express()
const port = 3000

const posts = [
  {
    username: "Kyle",
    title: "Post 1",
  },
  {
    username: "Jim",
    title: "Post 2",
  },
]

app.get("/posts", (req, res) => {
  res.json(posts)
})

app.listen(port, () => console.log(`Listening on port ${port}`))
