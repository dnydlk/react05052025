import { useState } from "react"
import { useAddTodoMutation } from "../state/todoApi"

export default function Form() {
  const [inputValue, setInputValue] = useState("")
  const [warning, setWarning] = useState(false)
  const [addTodo] = useAddTodoMutation()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim().length === 0) {
      setWarning(true)
      return
    }
    setWarning(false)
    try {
      await addTodo(inputValue.trim()).unwrap()
      setInputValue("")
    } catch (error) {
      console.error("Failed to add todo:", error)
    }
  }

  return (
    <>
      <h2>To Do List</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          name="form-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">+</button>
      </form>
      {warning && <p className="warning-text">Please provide content</p>}
    </>
  )
}
