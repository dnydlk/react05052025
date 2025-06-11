import { Provider } from "react-redux"
import "./App.css"
import Form from "./components/Form"
import TodoList from "./components/TodoList"
import { store } from "./state/store"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav"
import { filterCompletedTodos, sortTodo } from "./util"
import TodoDetails from "./components/TodoDetails"

export default function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="hw-todo-list">
          <div className="card">
            <Form />
            <Nav />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <TodoList displayMethod={sortTodo} />}
              />
              <Route
                path="/completed"
                render={() => <TodoList displayMethod={filterCompletedTodos} />}
              />
              <Route path="/todo/:id" component={TodoDetails} />
            </Switch>
          </div>
        </div>
      </Provider>
    </BrowserRouter>
  )
}
