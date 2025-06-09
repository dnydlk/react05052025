import { useDispatch } from "react-redux"
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
      <button onClick={() => dispatch(deleteTodo(id))}>X</button>
    </div>
  )
}
