import axios from "axios"
import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  FETCH_TODOS_FAILURE,
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  TOGGLE_TODO_FAILURE,
  TOGGLE_TODO_REQUEST,
  TOGGLE_TODO_SUCCESS,
} from "./todoTypes"
import { api } from "../config/api"

// - Add todo
export const addTodosRequest = () => {
  return {
    type: ADD_TODO_REQUEST,
  }
}

export const addTodosSuccess = (response) => {
  console.log(response)
  return {
    type: ADD_TODO_SUCCESS,
    payload: response.data,
  }
}
export const addTodosFailure = (error) => {
  return {
    type: ADD_TODO_FAILURE,
    payload: error.message,
  }
}

export const addTodo = (title) => {
  return async (dispatch) => {
    dispatch(addTodosRequest())
    try {
      const response = await axios.post(api.todos.create(), {
        title: title.trim(),
        isCompleted: false,
      })
      dispatch(addTodosSuccess(response))
    } catch (error) {
      dispatch(addTodosFailure(error))
    }
  }
}

// - Delete Todo
export const deleteTodoRequest = (todoId) => {
  return {
    type: DELETE_TODO_REQUEST,
    payload: todoId,
  }
}

export const deleteTodoSuccess = (todoId) => {
  return {
    type: DELETE_TODO_SUCCESS,
    payload: todoId,
  }
}

export const deleteTodoFailure = (errorMsg) => {
  return {
    type: DELETE_TODO_FAILURE,
    payload: errorMsg,
  }
}

export const deleteTodo = (todoId) => {
  return async (dispatch) => {
    dispatch(deleteTodoRequest(todoId))
    try {
      await axios.delete(api.todos.delete(todoId))
      dispatch(deleteTodoSuccess(todoId))
    } catch (error) {
      dispatch(deleteTodoFailure(error.message))
    }
  }
}

// - Toggle Todo
export const toggleTodoRequest = (todoId) => {
  return {
    type: TOGGLE_TODO_REQUEST,
    payload: todoId,
  }
}

export const toggleTodoSuccess = (todoId) => {
  return {
    type: TOGGLE_TODO_SUCCESS,
    payload: todoId,
  }
}

export const toggleTodoFailure = (errorMsg) => {
  return {
    type: TOGGLE_TODO_FAILURE,
    error: errorMsg,
  }
}

export const toggleTodo = (todoId) => {
  return async (dispatch, getState) => {
    dispatch(toggleTodoRequest(todoId))
    const todo = getState().todos.find((t) => t.id === todoId)
    if (!todo) {
      dispatch(toggleTodoFailure("Todo not found"))
      return
    }
    try {
      await axios.patch(api.todos.update(todoId), {
        isCompleted: !todo.isCompleted,
      })
      dispatch(toggleTodoSuccess(todoId))
    } catch (error) {
      dispatch(toggleTodoFailure(error.message))
    }
  }
}

// - Fetch todos
export const fetchTodosRequest = () => {
  return {
    type: FETCH_TODOS_REQUEST,
  }
}

export const fetchTodosSuccess = (todos) => {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos,
  }
}

export const fetchTodosFailure = (error) => {
  return {
    type: FETCH_TODOS_FAILURE,
    payload: error,
  }
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchTodos = () => {
  return async (dispatch) => {
    dispatch(fetchTodosRequest())
    await sleep(600)
    try {
      const response = await axios.get(api.todos.getAll())
      dispatch(fetchTodosSuccess(response.data))
    } catch (error) {
      dispatch(fetchTodosFailure(error.message))
    }
  }
}
