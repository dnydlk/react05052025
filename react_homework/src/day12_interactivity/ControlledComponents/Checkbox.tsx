import { useState } from "react"

export default function Checkbox() {
  const [checked, setChecked] = useState(false)

  return (
    <div className="controlled-checkbox">
      <h5>Controlled Checkbox</h5>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prevChecked) => !prevChecked)}
      />
      <span>Checkbox is {checked ? "checked" : "unchecked"}</span>
    </div>
  )
}
