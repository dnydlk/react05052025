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

const initialState = {
  todos: [],
  loading: false,
  error: "",
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
        error: "",
      }

    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    case ADD_TODO_REQUEST:
      return {
        ...state,
        error: "",
      }

    case DELETE_TODO_REQUEST:
    case TOGGLE_TODO_REQUEST:
      return state

    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      }

    case ADD_TODO_FAILURE:
    case DELETE_TODO_FAILURE:
    case TOGGLE_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      }

    case DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.filter((t) => t.id !== action.payload),
      }

    case TOGGLE_TODO_SUCCESS:
      return {
        ...state,
        todos: state.todos.map((t) => {
          return t.id === action.payload ? { ...t, isCompleted: !t.isCompleted } : t
        }),
      }

    default:
      return state
  }
}

export default todoReducer
