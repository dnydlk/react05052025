import TodoListReduxToolkit from "./Homework/TodoList-ts-ReduxToolkit"
import TodoListRTKQuery from "./Homework/TodoList-ts-RTK-Query"

export default function D20() {
  // const components = [TodoListReduxToolkit, TodoListRTKQuery]
  const components = [TodoListRTKQuery]
  return (
    <div className="day18-context-and-use-reducer">
      {/* <h1>D18 Context & useReducer</h1> */}
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
