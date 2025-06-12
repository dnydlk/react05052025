import { useState } from "react"

export default function ParentOne({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  console.log("Parent One Render")
  return (
    <div>
      <p>ParentOne</p>{" "}
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
    </div>
  )
}
