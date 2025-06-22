import { Router } from "express"
import { signup } from "../controller/userController.js"

const router = Router()

//- Sign up
router.post("/", signup)

export default router