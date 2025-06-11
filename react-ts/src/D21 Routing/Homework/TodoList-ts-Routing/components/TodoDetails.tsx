import { useHistory, useParams } from "react-router-dom"
import {
  useDeleteTodoMutation,
  useGetTodoByIdQuery,
  useUpdateTodoMutation,
} from "../state/todoApi"
import { useState } from "react"

export default function TodoDetails() {
  const { id } = useParams<{ id: string }>()
  const history = useHistory()
  const { data: todo, isLoading, error } = useGetTodoByIdQuery(id)
  const [deleteTodo] = useDeleteTodoMutation()
  const [updateTodo] = useUpdateTodoMutation()

  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState("")
  const [editedDescription, setEditedDescription] = useState("")

  if (isLoading) {
    return <div className="todo-details">Loading...</div>
  }

  if (error || !todo) {
    return (
      <div className="todo-details">
        <h2>Todo not found</h2>
        <button onClick={() => history.push("/")}>Back to list</button>
      </div>
    )
  }

  const handleDelete = async () => {
    try {
      await deleteTodo(id).unwrap()
      history.push("/")
    } catch (error) {
      console.error("Failed to delete:", error)
    }
  }

  const handleEdit = () => {
    setEditedTitle(todo.title)
    setEditedDescription(todo.description || "")
    setIsEditing(true)
  }

  const handleSave = async () => {
    try {
      await updateTodo({
        id,
        title: editedTitle,
        description: editedDescription,
      }).unwrap()
      setIsEditing(false)
    } catch (error) {
      console.error("Failed to update:", error)
    }
  }

  const handleCancel = () => {
    setIsEditing(false)
  }

  return (
    <div className="todo-details">
      <button id="back-btn" onClick={() => history.push("/")}>
        Back
      </button>
      {/* <code>{JSON.stringify(todo)}</code> */}
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            placeholder="Description"
            rows={4}
          />
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
        <div className="view-mode">
          <h2 className={todo.completed ? "task-completed" : ""}>{todo.title}</h2>
          <p>
            <label>Created:</label>
            <span>{todo.date ? new Date(todo.date).toLocaleString() : "N/A"}</span>
          </p>
          <p>
            <label>Status: </label>
            <span>{todo.completed ? "✓ Completed" : "○ Ongoing"}</span>
          </p>
          <p>
            <label>Description: </label>
            <span>{todo.description || "No description added yet."}</span>
          </p>
          <div>
            <button id="edit-btn" onClick={handleEdit}>
              Edit
            </button>
            <button id="delete-btn" onClick={handleDelete} className="delete-button">
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
