import { Component, type ReactNode } from "react"
import { withCounter } from "./withCounter"

interface ClickCounterProps {
  name: string
  count: number
  incrementCount: () => void
}

class ClickCounter extends Component<ClickCounterProps> {
  render(): ReactNode {
    const { count, incrementCount } = this.props

    return (
      <div>
        <button onClick={incrementCount}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    )
  }
}

export default withCounter(ClickCounter, 5)
