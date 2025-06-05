import type { InputProps } from "../lib/types"

export default function MyInput({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
}: InputProps) {
  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          placeholder={`Enter ${placeholder}`}
          value={value}
          type={type}
          onChange={(e) => onChange(e.target.value)}
        />
      </label>
    </div>
  )
}

// [todo] use ...rest in the props 
// [todo] same comp same props, put props in the component and export them 
// [todo] same comp same props, put props in the component & 