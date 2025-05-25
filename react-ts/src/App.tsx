import { Fragment } from "react/jsx-runtime"
import "./App.css"
import D11 from "./D11 React UI"
import LearnReact from "./LearnReact"

function App() {
  const components = [D11, LearnReact]
  return (
    <div className="app">
      {components.map((Component, index) => {
        return (
          // <div key={index} className="hide">
          <Fragment key={index}>
            <Component />
            <hr className="hr1" />
          </Fragment>
        )
      })}
      <br />
      <br />
    </div>
  )
}

export default App
