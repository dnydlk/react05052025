// https://www.youtube.com/watch?v=hKvV0euP3mY
import { useEffect, useRef, useState } from "react"

export default function App() {
  const [name, setName] = useState("")
  const renderCount = useRef(0)
  // {current: 0}
  const inputRef = useRef<HTMLInputElement>(null)
  const prevName = useRef("")

  const focus = () => {
    if (inputRef.current) inputRef.current.focus()
  }

  // useEffect(() => {
  //   renderCount.current = renderCount.current + 1
  // })
  useEffect(() => {
    prevName.current = name
  })

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>
        My Name is {name}, and it used to be {prevName.current}
      </p>
      <p>I rendered {renderCount.current} times</p>
      <button onClick={focus}>Focus</button>
    </>
  )
}
