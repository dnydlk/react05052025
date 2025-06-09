import { useState } from "react"
import Button from "./Button"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoActions"

export default function Form() {
  const [inputValue, setInputValue] = useState("")
  const [warning, setWarning] = useState(false)
  const dispatch = useDispatch()
  const handleAdd = () => {
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
      <div className="form">
        <input
          name="todo-title"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleAdd()
          }}
        />
        <Button onClick={() => handleAdd()}>+</Button>
      </div>
      {warning && <p className="warning-text">Please provide content</p>}
    </>
  )
}
