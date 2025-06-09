import { useEffect } from "react"
import TodoItem from "./TodoItem"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../redux/todoActions"

export default function TodoList() {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.todos)
  const loading = useSelector((state) => state.loading)
  const error = useSelector((state) => state.error)
  const displayContent = todos.map(({ id, title, isCompleted }) => {
    return <TodoItem key={id} id={id} title={title} isCompleted={isCompleted} />
  })

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  if (loading) return <h2 className="loading">Loading...</h2>
  if (error) return <h2 className="error">Error: {error}</h2>
  return <div className="todo-list">{displayContent}</div>
}
