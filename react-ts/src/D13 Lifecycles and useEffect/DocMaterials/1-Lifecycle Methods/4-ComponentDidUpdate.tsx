import { Component, type ReactNode } from "react"

type ComponentDidUpdateState = {
  counter: number
}

export default class ComponentDidUpdate extends Component<{}, ComponentDidUpdateState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      counter: 0,
    }
  }

  componentDidUpdate(
    prevProps: Readonly<{}>,
    prevState: Readonly<ComponentDidUpdateState>,
    snapshot?: any
  ): void {
    // console.warn("componentDidUpdate() called ", prevState)
    // if (prevState.counter < 3) {
    // this.setState({ counter: this.state.counter + 1 })
    // }
  }

  render(): ReactNode {
    // * Update state
    // console.warn("reder() called")
    return (
      <div className="component-did-update">
        <h4>Life Cycle Method: ComponentDidUpdate</h4>
        <Child data={this.state.counter} />
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}>
          Update Counter: {this.state.counter}
        </button>
      </div>
    )
  }
}

class Child extends Component<{ data: number }, ComponentDidUpdateState> {
  constructor(props: { data: number }) {
    super(props)
  }

  componentDidUpdate(
    prevProps: Readonly<{ data: number }>,
    prevState: Readonly<ComponentDidUpdateState>,
    snapshot?: any
  ): void {
    console.warn("componentDidUpdate() called ", prevProps.data, this.props.data)
  }

  render(): ReactNode {
    // * Update state
    // console.warn("reder() called")
    return (
      <div>
        <h3>Child Component: {this.props.data}</h3>
      </div>
    )
  }
}
