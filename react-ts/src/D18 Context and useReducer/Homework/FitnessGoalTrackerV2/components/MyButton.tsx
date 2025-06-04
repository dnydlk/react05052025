import type { MyButtonProps } from "../lib/types"

export default function MyButton({ className, onClickFn, buttonText }: MyButtonProps) {
  return (
    <button className={className} onClick={onClickFn}>
      {buttonText}
    </button>
  )
}
