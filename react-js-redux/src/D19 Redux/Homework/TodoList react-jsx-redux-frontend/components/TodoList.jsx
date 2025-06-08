import TodoItem from "./TodoItem"
import { useSelector } from "react-redux"

export default function TodoList() {
  const todoItems = useSelector((state) => state.todos)
  const displayContent = todoItems.map(({ id, title, isCompleted }) => {
    return <TodoItem key={id} id={id} title={title} isCompleted={isCompleted} />
  })
  return <div className="todo-list">{displayContent}</div>
}
