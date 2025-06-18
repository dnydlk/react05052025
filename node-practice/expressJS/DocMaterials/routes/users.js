import { Router } from "express"
const router = Router()

router.use(logger)

router.get("", (req, res) => {
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.send("User New Form")
})

router.post("/", (req, res) => {
  res.send("Created")
})

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user)
    res.send(`Get user with ID: ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`)
  })

//* .parem() runs any time it finds a param that mathces the name you passed in
// e.g: :id will trigger .parem()
const users = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
  // req.randomVariableWeDecided = user[id]
  req.user = users[id] // then see line 32
  next()
})

//* Middleware takes req, res, next
function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

export default router
