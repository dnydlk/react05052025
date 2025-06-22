import { Router } from "express"
import { login, logout, refresh } from "../controller/authController.js"

export const authRoute = Router()

//- Log in
authRoute.post("/login", login)

//- Log out
authRoute.post("/logout", logout)

//- Refresh token
authRoute.post("/refresh", refresh)