import { Component, type ReactNode } from "react"

type ComponentWillUnmountState = {
  isShowing: boolean
}

export default class ComponentWillUnmount extends Component<
  {},
  ComponentWillUnmountState
> {
  constructor(props: {}) {
    super(props)
    // * Initialization state
    console.warn("constructor() called")
    this.state = {
      isShowing: false,
    }
  }

  componentDidMount(): void {
    // * automatically called after the component is mounted
    console.warn("componentDidMount() called")
    // this.setState({ hasData: true })
  }

  render(): ReactNode {
    // * Update state
    console.warn("reder() called")
    return (
      <div className="component-will-unmount">
        <h4>Life Cycle Method: ComponentWillUnmount</h4>
        <button onClick={() => this.setState({ isShowing: !this.state.isShowing })}>
          Toggle Child Component
        </button>
        {this.state.isShowing && <Child />}
      </div>
    )
  }
}

class Child extends Component {
  componentWillUnmount(): void {
    // * automatically called before the component is unmounted
    console.warn("componentWillUnmount() called\n Child componentis being removed")
  }
  render(): ReactNode {
    return <h3>Child Component</h3>
  }
}
