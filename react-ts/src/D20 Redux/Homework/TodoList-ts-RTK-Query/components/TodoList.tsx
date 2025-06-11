import TodoItem from "./TodoItem"
import { useGetTodosQuery } from "../api/todoApi"
import { useMemo } from "react"
import { sortTodo } from "../util"

export default function TodoList() {
  //*[note] useGetTodosQuery returns:
  //   data: the fetched data (undefined if not yet fetched)
  //   isLoading: boolean indicating if the query is currently loading
  //   error: any error that occurred during the fetch
  //   isFetching: boolean indicating if the query is currently fetching
  //   refetch: function to manually refetch the data
  const { data, isLoading, error } = useGetTodosQuery()

  const sortedTodos = useMemo(() => {
    if (!data) return []
    return sortTodo(data)
  }, [data])

  const displayContent =
    data &&
    sortedTodos.map(({ id, title, completed }) => {
      return <TodoItem key={id} id={id} title={title} completed={completed} />
    })

  if (isLoading) return <h2 className="loading">Loading...</h2>
  if (error) return <h2 className="error">Error loading todos</h2>
  if (!data) return <h2 className="error">No todos</h2>
  return <div className="todo-list">{displayContent}</div>
}
