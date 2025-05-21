import "./App.css"
import D12 from "./D12"

function App() {
  const components = [D12]
  return (
    <div className="app">
      {components.map((Component, index) => {
        return (
          // <div key={index} className="hide">
          <div key={index}>
            <Component />
            <hr className="hr1" />
          </div>
        )
      })}
      <br />
      <br />
    </div>
  )
}

export default App
