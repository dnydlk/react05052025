import { useState } from "react"

export default function StateExercise() {
  const [count, setCount] = useState(0)

  return (
    <div id="state-exercise">
      <div className="myFlexBox">
        <h3>{count}</h3>
      </div>
      <div className="myFlexBox">
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1)
          }}>
          Increase
        </button>
        <button
          onClick={() => {
            setCount(0)
          }}>
          Set to Zero
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount - 1)
          }}>
          Decrease
        </button>
      </div>
    </div>
  )
}
