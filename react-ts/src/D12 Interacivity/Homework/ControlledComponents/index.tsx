import { useState } from "react"

export default function ControlledComponents() {
  return (
    <div className="controlled-components">
      <h3>Controlled Components</h3>
      <ControlledCheckBox />
      <ControlledSelect />
      <ControlledRadioGroup />
    </div>
  )
}

const ControlledCheckBox = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div className="controlled-checkbox">
      <h4>Controlled Checkbox</h4>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked((prevChecked) => !prevChecked)}
      />
      <span>Checkbox is {checked ? "checked" : "unchecked"}</span>
    </div>
  )
}

const ControlledSelect = () => {
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

const ControlledRadioGroup = () => {
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
      <RadioGroup name="gender" items={items} value={value} onChange={setValue} />
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

function RadioGroup({ name, items, value, onChange }: RadioProps) {
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
