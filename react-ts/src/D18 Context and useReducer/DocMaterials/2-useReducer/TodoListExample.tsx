import { useReducer, useState, type Dispatch } from "react"

type Todo = { id: number; name: string; complete: boolean }
type Action =
  | { type: typeof ACTIONS.ADD_TODO; payload: { name: string } }
  | { type: typeof ACTIONS.TOGGLE_TODO; payload: { id: number } }
  | { type: typeof ACTIONS.DELETE_TODO; payload: { id: number } }

const ACTIONS = {
  ADD_TODO: "add-todo" as const,
  TOGGLE_TODO: "toggle-todo" as const,
  DELETE_TODO: "delete-todo" as const,
}

const reducer = (todos: Todo[], action: Action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((t) => {
        if (t.id === action.payload.id) return { ...t, complete: !t.complete }
        return t
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter((t) => t.id !== action.payload.id)
  }
}

const newTodo = (name: string) => {
  return { id: Date.now(), name: name, complete: false }
}

export default function TodoListExample() {
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } })
    setName("")
  }
  return (
    <>
      <h4>Todolist with useReducer</h4>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <span> Enter to create new todo</span>
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </>
  )
}

interface TodoProps {
  todo: Todo
  dispatch: Dispatch<Action>
}
const Todo = ({ todo, dispatch }: TodoProps) => {
  return (
    <div>
      <span style={{ color: todo.complete ? "#AAA" : "#000" }}>{todo.name}</span>
      <button
        onClick={() => dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todo.id } })}>
        Toggle
      </button>
      <button
        onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}>
        Delete
      </button>
    </div>
  )
}
