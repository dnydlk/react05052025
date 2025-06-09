import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoActions"

export default function Form() {
  const [inputValue, setInputValue] = useState("")
  const [warning, setWarning] = useState(false)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.trim().length === 0) {
      setWarning(true)
      return
    }
    setWarning(false)
    dispatch(addTodo(inputValue))
    setInputValue("")
  }

  return (
    <>
      <h2>To Do List</h2>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <input
          name="todo-title"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSubmit(e)
          }}
        />
        <button type="submit">+</button>
      </form>
      {warning && <p className="warning-text">Please provide content</p>}
    </>
  )
}
