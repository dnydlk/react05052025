import { Component, type ReactNode } from "react"

type LifeCycleMethodState = {
  show: boolean
}

export default class LifeCycleMethod extends Component<{}, LifeCycleMethodState> {
  constructor(props: {}) {
    super(props)
    // * Initialization state
    console.warn("constructor() called")
    this.state = {
      show: true,
    }
  }

  componentDidMount(): void {
    // * automatically called after the component is mounted
    console.warn("componentDidMount() called")
  }

  render(): ReactNode {
    // * Update state
    console.warn("reder() called")
    return (
      <div>
        <h2>Life Cycle Method</h2>
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle NavBar
        </button>
        {this.state.show && <Nav />}
      </div>
    )
  }
}

class Nav extends Component {
  componentDidMount(): void {
    // automatically called after the component is mounted
    console.warn("Nav componentDidMount() called")
  }
  render(): ReactNode {
    return <h3>NavBar</h3>
  }
}
