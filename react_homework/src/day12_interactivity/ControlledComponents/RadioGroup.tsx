import { useState } from "react"

export default function RadioGroup() {
  const items: { value: string; label: string }[] = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "unknown", label: "Prefer not to say" },
  ]

  const [value, setValue] = useState<string>("unselected")

  return (
    <div className="controlled-radio-group">
      <h4>Controlled Radio Group</h4>
      <MyRadioGroup name="gender" items={items} value={value} onChange={setValue} />
      <p>You are {value}</p>
    </div>
  )
}

type RadioProps = {
  name: string
  items: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
}

function MyRadioGroup({ name, items, value, onChange }: RadioProps) {
  return (
    <>
      {items.map((i) => {
        return (
          <div key={i.value}>
            <input
              type="radio"
              name={name}
              value={i.value}
              id={name + i.value}
              checked={value === i.value}
              onChange={(e) => onChange(e.target.value)}
            />{" "}
            <label htmlFor={name + i.value}>{i.label}</label>
          </div>
        )
      })}
    </>
  )
}
