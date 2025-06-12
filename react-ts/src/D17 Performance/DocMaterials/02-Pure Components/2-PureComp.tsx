import { PureComponent } from "react"

class MyPureComp extends PureComponent {
  render() {
    console.log("PureComp render")
    return <div>Pure Component {this.props.name}</div>
  }
}

export default MyPureComp

// Difference between class App extends Component & MyPureComp extends PureComponent ?
