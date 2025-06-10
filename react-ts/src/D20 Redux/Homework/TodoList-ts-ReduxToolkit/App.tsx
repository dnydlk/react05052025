import { Provider } from "react-redux"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import { store } from "./state/store"

export default function App() {
  return (
    <div className="hw-todo-list">
      <div className="card">
        <Provider store={store}>
          <Form />
          <TodoList />
        </Provider>
      </div>
    </div>
  )
}
