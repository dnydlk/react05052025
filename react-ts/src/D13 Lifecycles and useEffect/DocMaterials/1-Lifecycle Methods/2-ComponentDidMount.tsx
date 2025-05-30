import { Component, type ReactNode } from "react"

type ComponentDidMountState = {
  hasData: boolean
}

export default class ComponentDidMount extends Component<{}, ComponentDidMountState> {
  constructor(props: {}) {
    super(props)
    // * Initialization state
    console.warn("constructor() called")
    this.state = {
      hasData: false,
    }
  }

  componentDidMount(): void {
    // * automatically called after the component is mounted
    console.warn("componentDidMount() called")
    this.setState({ hasData: true })
  }

  render(): ReactNode {
    // * Update state
    console.warn("reder() called")
    return (
      <div>
        <h2>Life Cycle Method: ComponentDidMount</h2>
      </div>
    )
  }
}
