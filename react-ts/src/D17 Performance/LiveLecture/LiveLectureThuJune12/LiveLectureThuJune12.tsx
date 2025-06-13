import { useEffect, useMemo, useState } from "react"
import Child from "./Child"

export default function LiveLectureThuJune12() {
  const [count, setCount] = useState(0)
  const [person, setPerson] = useState({
    fullName: "",
  })
  const handleChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson((p) => ({
      ...p,
      [key]: e.target.value,
    }))
  }

  const object = useMemo(() => ({}), [])

  useEffect(() => {
    console.log("Parent rendered")
  }, [])

  return (
    <div className="live-lecture-Thu-June-12">
      <h4>live-lecture-Thu-June-12</h4>
      <h5>Live Coding</h5>
      <button onClick={() => setCount((c) => c + 1)}>Increment: {count}</button>
      <input type="text" value={person.fullName} onChange={handleChange("fullName")} />
      <Child object={object} />
    </div>
  )
}
