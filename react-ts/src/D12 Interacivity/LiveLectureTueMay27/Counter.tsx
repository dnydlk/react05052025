import { useState } from "react"

export default function Counter() {
  const [num, setNum] = useState(0)
  const [intervalId, setIntervalId] = useState<number | null>(null)

  const handleStart = () => {
    if (intervalId) return
    const interval = setInterval(() => {
      setNum((n) => n + 1)
    }, 1000)
    setIntervalId(interval)
  }

  const handleStop = () => {
    if (intervalId !== null) {
      clearInterval(intervalId)
      setIntervalId(null)
    }
  }

  return (
    <div className="my-counter">
      <h3>Counter</h3>
      <h4>{num}</h4>
      <button onClick={() => handleStart()}>Start</button>
      <button onClick={() => handleStop()}>Stop</button>
    </div>
  )
}
