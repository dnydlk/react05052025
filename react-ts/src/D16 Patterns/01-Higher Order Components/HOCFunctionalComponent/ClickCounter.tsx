import { withCounter } from "./withCounter"

interface ClickCounterProps {
  name: string
  count: number
  incrementCount: () => void
}

const ClickCounter = ({ name, count, incrementCount }: ClickCounterProps) => {
  return (
    <button onClick={incrementCount}>
      {name} Count: {count}
    </button>
  )
}

export default withCounter(ClickCounter, 1)
