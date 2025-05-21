import { Component } from "react"
import Car from "./Car"
import CarClassComponent from "./CarClassComponent"

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <h2>Class Component</h2>
        <a href="https://youtu.be/lnV34uLEzis?si=wwNfH9pZ2d9_I9ZH" target="_blank">
          ReactJS Tutorial - 6 - Class Components
        </a>
        <h3>Functional Component Car</h3>
        <Car />
        <h3>Class Component Car</h3>
        <CarClassComponent color="blue" />
      </div>
    )
  }
}
export default Welcome
