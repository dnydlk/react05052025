import { configureStore } from "@reduxjs/toolkit"
import todoReducer from "./todo/todoSlice"
import logger from "redux-logger"

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
