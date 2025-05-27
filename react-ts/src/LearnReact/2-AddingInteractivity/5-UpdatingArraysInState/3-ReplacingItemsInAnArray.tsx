import { useState } from "react"

export default function ReplacingItemsInAnArray() {
  return (
    <div className="3-replacing-items-in-an-array">
      <h4>Replacing items in an array</h4>
      <CounterList />
    </div>
  )
}

let initialCounters = [0, 0, 0]

function CounterList() {
  const [counters, setCounters] = useState(initialCounters)

  function handleIncrementClick(index: number) {
    const nextCounters = counters.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1
      } else {
        // The rest haven't changed
        return c
      }
    })
    setCounters(nextCounters)
  }

  return (
    <ul>
      {counters.map((counter, i) => (
        <li key={i}>
          {counter}
          <button
            onClick={() => {
              handleIncrementClick(i)
            }}>
            +1
          </button>
        </li>
      ))}
    </ul>
  )
}
