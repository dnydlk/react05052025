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
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  )
}
