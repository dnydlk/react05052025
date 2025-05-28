import React, { Component } from "react"

class ClassComponentWithButton extends Component {
  handleOnClick = () => alert("This is a button in a class component using this keyword")
  render(): React.ReactNode {
    return (
      <div className="class-component-with-button">
        <h3>Class Component Event Handler</h3>
        <button onClick={() => alert("This a button in a class component")}>
          Click me
        </button>
        <button onClick={this.handleOnClick}>Click me too</button>
      </div>
    )
  }
}

export default ClassComponentWithButton
