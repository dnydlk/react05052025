import { useDispatch } from "react-redux"
import Button from "./Button"
import { deleteTodo, toggleTodo } from "../redux/todoActions"

export default function TodoItem({ id, title, isCompleted }) {
  const dispatch = useDispatch()
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={id}
        checked={isCompleted}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <label htmlFor={id}>{title}</label>
      <Button onClick={() => dispatch(deleteTodo(id))}>X</Button>
    </div>
  )
}
