import { useState } from "react"

export default function Challenge1() {
  return (
    <div className="1-challenge-1">
      <h4>Chalenge 1: Fix a request counter</h4>
      <RequestTracker />
    </div>
  )
}

function RequestTracker() {
  const [pending, setPending] = useState(0)
  const [completed, setCompleted] = useState(0)

  async function handleClick() {
    setPending((prevPending) => prevPending + 1)
    await delay(3000)
    setPending((prevPending) => prevPending - 1)
    setCompleted((prevCompleted) => prevCompleted + 1)
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  )
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
