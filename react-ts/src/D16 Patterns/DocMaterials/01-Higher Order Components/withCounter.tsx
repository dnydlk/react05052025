import React, { Component, type ComponentType } from "react"

export const withCounter = (
  WrappeddComponent: ComponentType<any>,
  incrementNumber: number
) => {
  class WithCounter extends Component<any, { count: number }> {
    constructor(props: any) {
      super(props)
      this.state = {
        count: 0,
      }
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber }
      })
    }

    render(): React.ReactNode {
      return (
        <WrappeddComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
          {...this.props}
        />
      )
    }
  }
  return WithCounter
}
