import { useState } from "react"
import { useImmer } from "use-immer"

interface TodoItem {
  id: number
  title: string
  done: boolean
}

type TodoAddHandler = (title: string) => void
type TodoChangeHandler = (todo: TodoItem) => void
type TodoDeleteHandler = (todoId: number) => void

export default function Challenge4() {
  return (
    <div className="d12-challenge4">
      <h3>Challenge 3: Fix the mutations using Immer </h3>
      <TaskApp />
    </div>
  )
}

let nextId = 3
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
]

function TaskApp() {
  // const [todos, setTodos] = useState<TodoItem[]>(initialTodos)
  const [todos, updateTodos] = useImmer<TodoItem[]>(initialTodos)

  const handleAddTodo: TodoAddHandler = (title) => {
    updateTodos((draft) => {
      draft.push({
        id: nextId++,
        title: title,
        done: false,
      })
    })
  }

  function handleChangeTodo(nextTodo: TodoItem) {
    // setTodos(
    //   todos.map((t) => {
    //     if (t.id === nextTodo.id) return { ...t, ...nextTodo }
    //     else return t
    //   })
    // )
    updateTodos((draft) => {
      const todo = draft.find((t) => t.id === nextTodo.id)
      if (todo) {
        todo.title = nextTodo.title
        todo.done = nextTodo.done
      }
    })
  }

  const handleDeleteTodo: TodoDeleteHandler = (todoId) =>
    // updateTodos((draft) => {
    //   const index = draft.findIndex((t) => t.id === todoId)
    //   if (index !== -1) draft.splice(index, 1)
    // })
    // * or
    updateTodos(todos.filter((t) => t.id !== todoId))

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  )
}

interface AddTodoProps {
  onAddTodo: TodoAddHandler
}

function AddTodo({ onAddTodo }: AddTodoProps) {
  const [title, setTitle] = useState("")
  return (
    <>
      <input
        placeholder="Add todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button
        onClick={() => {
          setTitle("")
          onAddTodo(title)
        }}>
        Add
      </button>
    </>
  )
}

interface TaskListProps {
  todos: TodoItem[]
  onChangeTodo: TodoChangeHandler
  onDeleteTodo: TodoDeleteHandler
}

function TaskList({ todos, onChangeTodo, onDeleteTodo }: TaskListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Task todo={todo} onChange={onChangeTodo} onDelete={onDeleteTodo} />
        </li>
      ))}
    </ul>
  )
}

interface TaskProps {
  todo: TodoItem
  onChange: TodoChangeHandler
  onDelete: TodoDeleteHandler
}

function Task({ todo, onChange, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false)
  let todoContent
  if (isEditing) {
    todoContent = (
      <>
        <input
          value={todo.title}
          onChange={(e) => {
            onChange({
              ...todo,
              title: e.target.value,
            })
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    )
  } else {
    todoContent = (
      <>
        {todo.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    )
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={(e) => {
          onChange({
            ...todo,
            done: e.target.checked,
          })
        }}
      />
      {todoContent}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </label>
  )
}
