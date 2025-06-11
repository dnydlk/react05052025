import TodoItem from "./TodoItem"
import { useGetTodosQuery, type TodoItemTypes } from "../state/todoApi"
import { useMemo } from "react"

interface TodoListProps {
  displayMethod: (todos: TodoItemTypes[]) => TodoItemTypes[]
}

export default function TodoList({ displayMethod }: TodoListProps) {
  //*[note] useGetTodosQuery returns:
  //   data: the fetched data (undefined if not yet fetched)
  //   isLoading: boolean indicating if the query is currently loading
  //   error: any error that occurred during the fetch
  //   isFetching: boolean indicating if the query is currently fetching
  //   refetch: function to manually refetch the data
  const { data, isLoading, error } = useGetTodosQuery()

  const todosToDisplay = useMemo(() => {
    if (!data) return []
    return displayMethod(data)
  }, [data, displayMethod])

  const displayContent =
    data &&
    todosToDisplay.map(({ id, title, completed }) => {
      return <TodoItem key={id} id={id} title={title} completed={completed} />
    })

  if (isLoading) return <h2 className="loading">Loading...</h2>
  if (error)
    return (
      <>
        <h2 className="error">Error loading todos</h2>
        <code>{JSON.stringify(error)}</code>
      </>
    )
  if (!data) return <h2 className="error">No todos</h2>
  return <div className="todo-list">{displayContent}</div>
}
