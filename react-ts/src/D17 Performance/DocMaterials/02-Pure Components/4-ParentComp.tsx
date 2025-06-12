import { Component } from "react"
import RegularComp from "./3-RegularComp"
import MyPureComp from "./2-PureComp"

class ParentComp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Vishwas",
    }
  }

  componentDidMount(): void {
    setInterval(() => {
      this.setState({
        name: "Vishwas",
      })
    }, 2000)
  }
  render() {
    console.log("--------------------ParentComp render--------------------")
    return (
      <div>
        ParentComp <RegularComp name={this.state.name} />{" "}
        <MyPureComp name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp
