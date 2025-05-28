import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

interface TodoItem {
  id: string
  title: string
}

type HandleAdd = () => void
type HandleDelete = (todoId: string) => void
type HandleEdit = (todoId: string, e: React.ChangeEvent<HTMLInputElement>) => void

interface ListItemProps {
  todo: TodoItem
  handleDelete: HandleDelete
  handleEdit: HandleEdit
}

const initialList: TodoItem[] = [
  {
    id: "0",
    title: "task1",
  },
  {
    id: "1",
    title: "task2",
  },
  {
    id: "2",
    title: "task3",
  },
]

export default function FunctionalComponents() {
  const [todos, setTodos] = useState(initialList)
  const [inputValue, setInputValue] = useState("")

  const handleAdd: HandleAdd = () => {
    if (inputValue.trim().length === 0) return
    const newTodo: TodoItem = {
      id: uuidv4(),
      title: inputValue,
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setInputValue("")
  }

  const handleDelete: HandleDelete = (todoId) =>
    setTodos(todos.filter((t) => t.id !== todoId))

  const handleEdit: HandleEdit = (todoId, e) => {
    setTodos(
      todos.map((t) => {
        if (t.id === todoId) return { ...t, title: e.target.value }
        else return t
      })
    )
  }

  return (
    <div className="functional-components">
      <h3>Functional Components TodoList</h3>
      <div className="myFlexBox" style={{ alignItems: "stretch" }}>
        <input
          type="text"
          placeholder="add item..."
          style={{ width: "350px" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd()
          }}
        />
        <button onClick={() => handleAdd()}>Add</button>
      </div>
      {todos.map((t) => {
        return (
          <ListItem
            key={t.id}
            todo={t}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        )
      })}
    </div>
  )
}

function ListItem({ todo: { id, title }, handleDelete, handleEdit }: ListItemProps) {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="myFlexBox" style={{ width: "440px" }}>
      {!isEditing && <p style={{ marginRight: "auto" }}>{title}</p>}
      {isEditing && (
        <input
          name="title"
          type="text"
          style={{ marginRight: "auto" }}
          value={title}
          onChange={(e) => handleEdit(id, e)}
        />
      )}

      <button onClick={() => handleDelete(id)}>delete</button>
      <button onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "save" : "edit"}
      </button>
    </div>
  )
}
