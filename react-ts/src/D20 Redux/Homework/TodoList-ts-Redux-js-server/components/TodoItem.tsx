import { useAppDispatch } from "../state/hooks"
import { deleteTodoAsync, toggleTodoAsync } from "../state/todo/todoSlice"

export interface TodoItem {
  id: string
  title: string
  completed: boolean
}

export default function TodoItem({ id, title, completed }: TodoItem) {
  const dispatch = useAppDispatch()

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        id={id}
        checked={completed}
        onChange={() => dispatch(toggleTodoAsync(id))}
      />
      <label htmlFor={id}>{title}</label>
      <button onClick={() => dispatch(deleteTodoAsync(id))}>X</button>
    </div>
  )
}
