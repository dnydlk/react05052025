import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

interface TodoItem {
  id: string
  title: string
}

type TodoAddHandler = () => void
type TodoDeleteHandler = (todoId: string) => void
type TodoEditHandler = (todoId: string, newTitle: string) => void

interface ListItemProps {
  todo: TodoItem
  handleDelete: TodoDeleteHandler
  handleEdit: TodoEditHandler
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

  const handleAdd: TodoAddHandler = () => {
    if (inputValue.trim().length === 0) return
    const newTodo: TodoItem = {
      id: uuidv4(),
      title: inputValue.trim(),
    }
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setInputValue("")
  }

  const handleDelete: TodoDeleteHandler = (todoId) =>
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todoId))

  const handleEdit: TodoEditHandler = (todoId, newTitle) => {
    setTodos((prevTodos) =>
      prevTodos.map((t) => {
        if (t.id === todoId) return { ...t, title: newTitle }
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
  const [editValue, setEditValue] = useState(title)

  const handleSave = () => {
    if (editValue.trim().length > 0) {
      handleEdit(id, editValue)
      setIsEditing(false)
    }
  }

  const handleCancel = () => {
    setEditValue(title) // Reset to original value
    setIsEditing(false)
  }

  return (
    <div
      className="myFlexBox"
      style={{
        width: "440px",
        alignItems: "stretch",
        marginTop: "10px",
        padding: "5px",
      }}>
      {isEditing ? (
        <input
          type="text"
          value={editValue}
          style={{ marginRight: "auto" }}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave()
            if (e.key === "Escape") handleCancel()
          }}
          autoFocus
        />
      ) : (
        <p style={{ marginRight: "auto" }}>{title}</p>
      )}

      {!isEditing ? (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      ) : (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      )}
      {!isEditing && (
        <button style={{ backgroundColor: "#ff0000b0" }} onClick={() => handleDelete(id)}>
          delete
        </button>
      )}
    </div>
  )
}
