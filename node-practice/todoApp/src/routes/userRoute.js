import { Router } from "express"
import { signup } from "../controller/userController.js"

export const userRoute = Router()

//- Sign up
userRoute.post("/", signup)