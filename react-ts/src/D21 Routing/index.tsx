import TodoListRouting from "./Homework/TodoList-ts-Routing"

export default function D21() {
  const components = [TodoListRouting]
  return (
    <div className="day18-context-and-use-reducer">
      {/* <h1>D18 Context & useReducer</h1> */}
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
