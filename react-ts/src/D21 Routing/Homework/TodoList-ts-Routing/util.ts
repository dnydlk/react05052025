import type { TodoItemTypes } from "./api/todoApi"

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const sortTodo = (todos: TodoItemTypes[]) => {
  return [...todos].sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  )
}

export const filterCompletedTodos = (todos: TodoItemTypes[]) => {
  return [...todos]
    .filter((t) => t.completed)
    .sort((a, b) => {
      if (a.date && b.date) {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      return 0
    })
}
