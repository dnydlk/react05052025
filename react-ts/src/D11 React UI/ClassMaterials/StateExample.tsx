import { useState } from "react"

export default function StateExample() {
  const [showText, setShowText] = useState(true)
  const [textColor, setTextColor] = useState("black")

  return (
    <div id="state-example">
      <h4>State Example</h4>
      <div className="myFlexBox">
        <button
          onClick={() => {
            setShowText(!showText)
          }}>
          Show/Hide
        </button>
        <button
          onClick={() => {
            setTextColor(textColor === "black" ? "red" : "black")
          }}>
          Change Color
        </button>
      </div>
      {showText && (
        <div className="myFlexBox">
          <p style={{ color: textColor }}>Hi, my name is Daniyal</p>
        </div>
      )}
    </div>
  )
}
