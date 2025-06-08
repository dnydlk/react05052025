import { applyMiddleware, createStore } from "redux"
import todoReducer from "./todoReducer"
import { logger } from "redux-logger"

const store = createStore(todoReducer, applyMiddleware(logger))

export default store
