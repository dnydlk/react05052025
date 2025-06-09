import { applyMiddleware, createStore } from "redux"
import todoReducer from "./todoReducer"
import { logger } from "redux-logger"
import { thunk } from "redux-thunk"
import { composeWithDevTools } from "@redux-devtools/extension"

const store = createStore(
  todoReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
)

export default store
