import { useState } from "react"
import { useAppDispatch } from "../state/hooks"
import { addTodoAsync } from "../state/todo/todoSlice"

export default function Form() {
  const [inputValue, setInputValue] = useState("")
  const [warning, setWarning] = useState(false)
  const dispatch = useAppDispatch()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim().length === 0) {
      setWarning(true)
      return
    }
    setWarning(false)
    dispatch(addTodoAsync(inputValue))
    setInputValue("")
  }

  return (
    <>
      <h2>To Do List</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button type="submit">+</button>
      </form>
      {warning && <p className="warning-text">Please provide content</p>}
    </>
  )
}
