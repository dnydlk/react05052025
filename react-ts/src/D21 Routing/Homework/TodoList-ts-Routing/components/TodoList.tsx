import TodoItem from "./TodoItem"
import { useGetTodosQuery, type TodoItemTypes } from "../state/todoApi"
import { useMemo } from "react"

interface TodoListProps {
  utilityFunction: (todos: TodoItemTypes[]) => TodoItemTypes[]
}

export default function TodoList({ utilityFunction }: TodoListProps) {
  //*[note] useGetTodosQuery returns:
  //   data: the fetched data (undefined if not yet fetched)
  //   isLoading: boolean indicating if the query is currently loading
  //   isFetching: boolean indicating if the query is currently fetching
  //   error: any error that occurred during the fetch
  //   refetch: function to manually refetch the data
  const { data, isLoading, error } = useGetTodosQuery()

  const todosToDisplay = useMemo(() => {
    if (!data) return []
    return utilityFunction(data)
  }, [data, utilityFunction])

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
