import { useState } from "react"

export default function Select() {
  const [selected, setSelected] = useState("Option 1")

  return (
    <div className="controlled-select">
      <h4>Controlled Select</h4>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select>
      <span> You selected {selected}</span>
    </div>
  )
}
