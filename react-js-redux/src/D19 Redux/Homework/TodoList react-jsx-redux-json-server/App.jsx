import { Provider } from "react-redux"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import store from "./redux/store"

export default function App() {
  return (
    <Provider store={store}>
      <div className="hw-todo-list">
        <div className="card">
          <Form />
          <TodoList />
        </div>
      </div>
    </Provider>
  )
}
