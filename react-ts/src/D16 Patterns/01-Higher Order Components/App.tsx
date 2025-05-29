import { Component, type ReactNode } from "react"
import ClickCounter from "./ClickCounter"
import HoverCounter from "./HoverCounter"

export default class App extends Component {
  render(): ReactNode {
    return (
      <div className="higher-order-components-app">
        <ClickCounter name="Dani" />
        <HoverCounter />
      </div>
    )
  }
}
