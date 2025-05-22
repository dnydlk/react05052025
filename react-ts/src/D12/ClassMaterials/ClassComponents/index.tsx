import { Component } from "react"
import Car from "./Car"
import CarClassComponent from "./CarClassComponent"

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h3>Class Component</h3>
        <a href="https://youtu.be/lnV34uLEzis?si=wwNfH9pZ2d9_I9ZH" target="_blank">
          ReactJS Tutorial - 6 - Class Components
        </a>
        <h4>Functional Component Car</h4>
        <Car />
        <h4>Class Component Car</h4>
        <CarClassComponent color="blue" />
      </div>
    )
  }
}
export default Welcome
