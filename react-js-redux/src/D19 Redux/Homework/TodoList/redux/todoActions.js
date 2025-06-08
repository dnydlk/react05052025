import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todoTypes"

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: {
      id: Date.now(),
      title: title.trim(),
      isCompleted: false,
    },
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId,
  }
}

export const toggleTodo = (todoId) => {
  return {
    type: TOGGLE_TODO,
    payload: todoId,
  }
}
