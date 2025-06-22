import { Router } from "express"
import { login } from "../controller/authController.js"

export const authRoute = Router()

//- Log in
authRoute.post("/login", login)