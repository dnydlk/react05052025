import { useRef } from "react"

export default function FocusATextElement() {
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  return (
    <>
      <h4>useRed Example 2 Focus a Text Input</h4>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}
