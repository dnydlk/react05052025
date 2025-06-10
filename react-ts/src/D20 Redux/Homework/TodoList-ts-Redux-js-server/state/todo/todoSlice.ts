import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { TodoItem } from "../../components/TodoItem"
import type { RootStore } from "../store"
import axios from "axios"
import { api } from "../../api/api"
import { sleep } from "../../util"

export interface TodoState {
  todos: TodoItem[]
  loading: boolean
  error: string
}

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: "",
}

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // - Fetch Todos
      .addCase(fetchTodosAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTodosAsync.fulfilled, (state, action) => {
        state.todos = action.payload
        state.loading = false
        state.error = ""
      })
      .addCase(fetchTodosAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to fetch todos"
      })
      // - Add Todos
      .addCase(addTodoAsync.pending, (state) => {
        state.error = ""
      })
      .addCase(addTodoAsync.fulfilled, (state, action: PayloadAction<TodoItem>) => {
        state.todos.push(action.payload)
      })
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.error = action.error.message || "Falied to add todo"
      })
      // - Toggle Todos
      .addCase(toggleTodoAsync.pending, (state) => {
        state.error = ""
      })
      .addCase(toggleTodoAsync.fulfilled, (state, action) => {
        const index = state.todos.findIndex((todo) => todo.id === action.payload.id)
        if (index !== -1) {
          state.todos[index] = action.payload
        }
        state.loading = false
        state.error = ""
      })
      .addCase(toggleTodoAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message || "Failed to toggle todo"
      })
      // - Delete Todo
      .addCase(deleteTodoAsync.pending, (state) => {
        state.error = ""
      })
      .addCase(deleteTodoAsync.fulfilled, (state, action: PayloadAction<TodoItem>) => {
        state.todos = state.todos.filter((t) => t.id !== action.payload.id)
      })
      .addCase(deleteTodoAsync.rejected, (state, action) => {
        state.error = action.error.message || "Failed to delete todo"
      })
  },
})

export const fetchTodosAsync = createAsyncThunk<TodoItem[]>("todos/fetchTodos", async () => {
  await sleep(400)
  const response = await axios.get(api.getAll())
  return response.data
})

export const addTodoAsync = createAsyncThunk<TodoItem, string>(
  "todos/addTodo",
  async (title) => {
    const response = await axios.post(api.create(), {
      title: title.trim(),
      completed: false,
    })
    return response.data
  }
)

export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodo",
  async (todoId: string) => {
    const response = await axios.delete(api.delete(todoId))
    return response.data
  }
)

export const toggleTodoAsync = createAsyncThunk(
  "todos/toggleTodo",
  async (todoId: string, { getState }) => {
    const state = getState() as RootStore
    const todo = state.todo.todos.find((t) => t.id === todoId)
    if (!todo) {
      throw new Error("Todo not found")
    }
    const updatedTodo = { ...todo, completed: !todo.completed }
    await axios.patch(api.update(todoId), updatedTodo)
    return updatedTodo
  }
)

export const {} = todoSlice.actions
export const selectTodos = (state: RootStore) => state.todo.todos
export default todoSlice.reducer
