import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../state/hooks"
import TodoItem from "./TodoItem"
import { fetchTodosAsync } from "../state/todo/todoSlice"

export default function TodoList() {
  const todos = useAppSelector((state) => state.todo.todos)
  const loading = useAppSelector((state) => state.todo.loading)
  const error = useAppSelector((state) => state.todo.error)
  const dispatch = useAppDispatch()

  const displayContent = todos.map(({ id, title, completed }) => {
    return <TodoItem key={id} id={id} title={title} completed={completed} />
  })

  useEffect(() => {
    dispatch(fetchTodosAsync())
  }, [])

  if (loading) return <h2 className="loading">Loading...</h2>
  if (error) return <h2 className="error">Error : {error}</h2>
  return <div className="todo-list">{displayContent}</div>
}
