import { useState } from "react"

export default function UnclickableButton() {
  const [isDisabled, setIsDisabled] = useState(false)

  const handleMouseEnter = () => {
    setIsDisabled(true)
  }
  const handleMouseOut = () => {
    setIsDisabled(false)
  }
  return (
    <>
      <h4>Unclickable button</h4>
      <button
        className="unclickable-button"
        disabled={isDisabled}
        onMouseOver={handleMouseEnter}
        onMouseOut={handleMouseOut}>
        {isDisabled ? "Unclickable" : "Clickable"} Button
      </button>
    </>
  )
}
