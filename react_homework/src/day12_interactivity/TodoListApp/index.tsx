import ClassComponents from "./ClassComponents"
import FunctionalComponents from "./FunctionalComponents"

export default function TodoListApp() {
  return (
    <div className="d12-todo-list">
      <FunctionalComponents />
      <ClassComponents />
    </div>
  )
}
