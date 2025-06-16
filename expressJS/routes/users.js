const express = require("express")
const router = express.Router()

router.get("", (req, res) => {
  res.send("User List")
})

router.get("/new", (req, res) => {
  res.send("User New Form")
})

router.post("/", (req, res) => {
  res.send("Created")
})

//! put dynamic route to the bottom
// router.get("/:userId", (req, res) => {
//   res.send(`Get user with Id: ${req.params.userId}`)
// })

// router.put("/:userId", (req, res) => {
//   res.send(`Update user with Id: ${req.params.userId}`)
// })

// router.delete("/:userId", (req, res) => {
//   res.send(`Delete user with Id: ${req.params.userId}`)
// })

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

const users = [{ name: "Kyle" }, { name: "Sally" }]
router.param("id", (req, res, next, id) => {
  req.user = users[id]
  next()
})

module.exports = router
