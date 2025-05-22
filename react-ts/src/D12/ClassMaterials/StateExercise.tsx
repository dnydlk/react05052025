import { useState } from "react"

export default function StateExercise() {
  const [count, setCount] = useState(0)

  return (
    <div id="state-exercise">
      <h4>State Exercise</h4>
      <div className="myFlexBox">
        <p>{count}</p>
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
