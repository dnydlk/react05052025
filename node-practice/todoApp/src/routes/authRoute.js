import { Router } from "express"
import { login } from "../controller/index.js"

const router = Router()

router.post("login", login)
