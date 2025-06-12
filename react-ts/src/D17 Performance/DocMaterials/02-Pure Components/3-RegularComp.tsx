import { Component, PureComponent } from "react"

// class RegularComp extends Component {
// [note] Now since both RegularComp & PureCopm are all extending PureComponent
// [note] Neither of them will get re-render
class RegularComp extends PureComponent {
  render() {
    console.log("RegularComp render")
    return <div>RegularComp {this.props.name}</div>
  }
}

export default RegularComp
