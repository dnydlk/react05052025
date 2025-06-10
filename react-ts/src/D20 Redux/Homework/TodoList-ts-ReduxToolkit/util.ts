import type { TodoItem } from "./components/TodoItem"

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const sortTodo = (todos: TodoItem[]) => {
  return [...todos].sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  )
}
