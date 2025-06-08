import { useState } from "react"
import Button from "./Button"
import { useDispatch } from "react-redux"
import { addTodo } from "../redux/todoActions"

export default function Form() {
  const [inputValue, setInputValue] = useState("")
  // [todo] change placeholder to another way of reminding the user to must have input
  const [placeholder, setPlaceholder] = useState("")
  const dispatch = useDispatch()
  const handleAdd = () => {
    if (inputValue.trim().length === 0) {
      setPlaceholder("Must provide content")
      return
    }
    dispatch(addTodo(inputValue))
    setPlaceholder("")
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
          placeholder={placeholder}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button onClick={() => handleAdd()}>+</Button>
      </div>
    </>
  )
}
