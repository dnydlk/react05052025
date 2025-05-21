import { Component } from "react"

type CarClassComponentProps = {
  color: string
}

type CarClassComponentState = {
  brand: string
  model: string
  color: string
  year: number
}

class CarClassComponent extends Component<
  CarClassComponentProps,
  CarClassComponentState
> {
  constructor(props: CarClassComponentProps) {
    // BP: In Class Component, pass full props to super
    super(props)

    // BP: OR destruct AFTER calling super
    const { color } = this.props

    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: color,
      year: 1964,
    }
  }
  changeColor = () => {
    console.log("changing color")
    this.setState({ color: this.state.color === "blue" ? "red" : "blue" })
  }

  render() {
    return (
      <div id="car-class-component">
        <p>
          I'm a {this.state.color} {this.state.model} from {this.state.year}
        </p>
        <button onClick={this.changeColor}>Change Color</button>
      </div>
    )
  }
}

export default CarClassComponent
