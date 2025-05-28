import { Component, type ChangeEvent, type KeyboardEvent } from "react"
import { v4 as uuidv4 } from "uuid"

interface TodoItem {
  id: string
  title: string
}

interface State {
  todos: TodoItem[]
  inputValue: string
}

interface ListItemProps {
  todo: TodoItem
  handleDelete: (id: string) => void
  handleEdit: (id: string, newTitle: string) => void
}

class ClassComponents extends Component<{}, State> {
  state: State = {
    todos: [
      { id: "0", title: "task1" },
      { id: "1", title: "task2" },
      { id: "2", title: "task3" },
    ],
    inputValue: "",
  }

  handleAdd = () => {
    const { inputValue } = this.state
    if (inputValue.trim().length === 0) return

    const newTodo: TodoItem = {
      id: uuidv4(),
      title: inputValue.trim(),
    }

    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      inputValue: "",
    }))
  }

  handleDelete = (id: string) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((t) => t.id !== id),
    }))
  }

  handleEdit = (id: string, newTitle: string) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((t) => (t.id === id ? { ...t, title: newTitle } : t)),
    }))
  }

  handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ inputValue: e.target.value })
  }

  handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") this.handleAdd()
  }

  render() {
    const { todos, inputValue } = this.state

    return (
      <div className="functional-components">
        <h4>Class Components TodoList</h4>
        <div className="myFlexBox" style={{ alignItems: "stretch" }}>
          <input
            type="text"
            placeholder="add item..."
            style={{ width: "350px" }}
            value={inputValue}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
          />
          <button onClick={this.handleAdd}>Add</button>
        </div>
        {todos.map((t) => (
          <ListItem
            key={t.id}
            todo={t}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
          />
        ))}
      </div>
    )
  }
}

class ListItem extends Component<
  ListItemProps,
  { isEditing: boolean; editValue: string }
> {
  state = {
    isEditing: false,
    editValue: this.props.todo.title,
  }

  handleSave = () => {
    const { editValue } = this.state
    if (editValue.trim().length > 0) {
      this.props.handleEdit(this.props.todo.id, editValue)
      this.setState({ isEditing: false })
    }
  }

  handleCancel = () => {
    this.setState({
      isEditing: false,
      editValue: this.props.todo.title,
    })
  }

  handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") this.handleSave()
    if (e.key === "Escape") this.handleCancel()
  }

  render() {
    const { todo, handleDelete } = this.props
    const { isEditing, editValue } = this.state

    return (
      <div
        className="myFlexBox"
        style={{
          width: "440px",
          alignItems: "stretch",
          marginTop: "10px",
          padding: "5px",
        }}>
        {isEditing ? (
          <input
            type="text"
            value={editValue}
            style={{ marginRight: "auto" }}
            onChange={(e) => this.setState({ editValue: e.target.value })}
            onKeyDown={this.handleKeyDown}
            autoFocus
          />
        ) : (
          <p style={{ marginRight: "auto" }}>{todo.title}</p>
        )}

        {!isEditing ? (
          <button onClick={() => this.setState({ isEditing: true })}>Edit</button>
        ) : (
          <>
            <button onClick={this.handleSave}>Save</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </>
        )}
        {!isEditing && (
          <button
            style={{ backgroundColor: "#ff0000b0" }}
            onClick={() => handleDelete(todo.id)}>
            delete
          </button>
        )}
      </div>
    )
  }
}

export default ClassComponents
