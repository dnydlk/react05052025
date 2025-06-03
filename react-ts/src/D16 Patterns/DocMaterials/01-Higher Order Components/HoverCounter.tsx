import { Component, type ReactNode } from "react"
import { withCounter } from "./withCounter"

interface HouverCounterProps {
  count: number
  incrementCount: () => void
}

class HoverCounter extends Component<HouverCounterProps> {
  render(): ReactNode {
    const { count, incrementCount } = this.props
    return (
      <div>
        <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default withCounter(HoverCounter, 10)
