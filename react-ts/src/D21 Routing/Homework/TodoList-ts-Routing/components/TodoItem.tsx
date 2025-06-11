import { Link } from "react-router-dom"
import { useDeleteTodoMutation, useToggleTodoMutation } from "../api/todoApi"

export interface TodoItemProps {
  id: string
  title: string
  completed: boolean
}

export default function TodoItem({ id, title, completed }: TodoItemProps) {
  //*[note] useDeleteTodoMutation returns: [triggerFunction, resultObject]
  //   triggerFunction (deleteTodo): Call this to execute the mutation
  //   resultObject contains: isLoading, isSuccess, isError, data, error
  //   .unwrap(): Allows you to handle the promise with try/catch
  const [deleteTodo] = useDeleteTodoMutation()
  const [toggleTodo] = useToggleTodoMutation()

  const handleDelete = async () => {
    try {
      await deleteTodo(id).unwrap()
    } catch (error) {
      console.error("Failed to delete todo:", error)
    }
  }

  const handleToggle = async () => {
    try {
      await toggleTodo({ id, completed: !completed }).unwrap()
    } catch (error) {
      console.error("Failed to toggle todo:", error)
    }
  }

  return (
    <div className="todo-item">
      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <Link to={`/todo/${id}`} className="todo-link">
        <label className={completed ? "task-completed" : ""}>{title}</label>
      </Link>
      <button onClick={handleDelete}>X</button>
    </div>
  )
}
