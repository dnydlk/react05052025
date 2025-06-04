import type { InputProps } from "./lib/types"

export default function Input({
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
