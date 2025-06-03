import { Component, type ReactNode } from "react"
import ClickCounter from "./ClickCounter"
import HoverCounter from "./HoverCounter"

export default class App extends Component {
  render(): ReactNode {
    return (
      <div className="higher-order-components-app">
        <h4>Higher Order Class Components</h4>
        <ClickCounter name="Dani" />
        <HoverCounter />
      </div>
    )
  }
}
