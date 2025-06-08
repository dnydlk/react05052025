import { initialTodoList } from "../data"
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todoTypes"

const initialState = {
  todos: initialTodoList,
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      }

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((t) => {
          if (t.id === action.payload) return { ...t, isCompleted: !t.isCompleted }
          else return t
        }),
      }

    default:
      return state
  }
}

export default todoReducer
