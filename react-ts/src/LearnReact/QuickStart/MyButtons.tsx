import { useState } from "react"

export function AlertButton() {
  const handleClick = () => alert("You Clicked me!")
  return (
    <>
      <button onClick={() => handleClick()}>Click me</button>
    </>
  )
}

// * Works: onClick={handleClick}
// You're directly passing the handleClick function as the click handler. When the button is clicked, React calls handleClick(), which shows the alert.

// * Doesn't work: onClick={() => handleClick}
// You're passing an arrow function, yes
// but that function returns the handleClick function without calling it.
// So React calls your arrow function on click, but it just hands back handleClick and doesn't do anything with it. No alert happens.
// It's like writing:
// const fakeHandler = () => handleClick;
// fakeHandler() returns the function, but doesn't call it
// ! Have to call the function:
// * Works: onClick={() => handleClick()}

export function SimpleButton() {
  return <button>I'm a button</button>
}

type ButtonWithStateProps = {
  /** The text to display inside the button */
  count?: number
  /** Optional function called on button click */
  // * onClick is an optional function that takes no arguments and returns nothing (void)
  onClick?: () => void
}

export function ButtonWithState({ count, onClick }: ButtonWithStateProps) {
  // * const [count, setCount] = useState(0)
  // * Moved to MyApp.tsx
  // the current state (count)
  // the function that lets you update it (setCount)
  // * const handleClick = () => setCount(count + 1)
  // * Moved to MyApp.tsx

  const [internalCount, setInternalCount] = useState(0)
  // * v1 const handleClick = () => setInternalCount(internalCount + 1)
  // * v2
  const isStateLifted = count !== undefined && onClick !== undefined
  const displayCount = isStateLifted ? count : internalCount
  const handleClick = isStateLifted ? onClick : () => setInternalCount(internalCount + 1)

  return (
    <div>
      {/* v1 <button onClick={onClick === undefined ? handleClick : onClick}>
        Clicked {count === undefined ? internalCount : count} times
      </button> */}
      <button onClick={handleClick}>Clicked {displayCount} times</button>
    </div>
  )
}
