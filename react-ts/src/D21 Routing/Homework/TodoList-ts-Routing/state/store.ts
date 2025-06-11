import { configureStore } from "@reduxjs/toolkit"
import { todoApi } from "../api/todoApi"
import logger from "redux-logger"

export const store = configureStore({
  reducer: {
    // RTK Query slices are added to the store
    [todoApi.reducerPath]: todoApi.reducer,
  },
  // api middleware enables caching, invalidation, polling, and other features of RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware).concat(logger),
})

export type RootStore = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
