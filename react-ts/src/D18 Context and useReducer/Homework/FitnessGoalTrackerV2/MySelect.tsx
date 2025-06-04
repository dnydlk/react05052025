import type { MySelectProps } from "./lib/types"

export default function MySelect({
  label,
  name,
  value,
  onChangeFn,
  options,
}: MySelectProps) {
  return (
    <div>
      <label>
        {label}
        <select name={name} value={value} onChange={onChangeFn}>
          {options}
        </select>
      </label>
    </div>
  )
}
