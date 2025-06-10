import Homework from "./Homework/TodoList-ts-ReduxToolkit"

export default function D20() {
  const components = [Homework]
  return (
    <div className="day18-context-and-use-reducer">
      {/* <h1>D18 Context & useReducer</h1> */}
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
