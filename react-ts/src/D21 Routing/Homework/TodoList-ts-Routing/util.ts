import type { TodoItemTypes } from "./state/todoApi"

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const sortTodo = (todos: TodoItemTypes[]) => {
  // [note] .sort() sort inplce so have to copy the input array first
  return [...todos].sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  )
}

export const filterCompletedTodos = (todos: TodoItemTypes[]) => {
  // [note] no need [...todos] for filter returns a new array
  return todos
    .filter((t) => t.completed)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })
}
