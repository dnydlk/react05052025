import "./App.css"
import LiveLectureTueMay19 from "./D11 React UI/LiveLectureTueMay19"
import LiveLectureThuMay21 from "./D11 React UI/LiveLectureThuMay21"

function App() {
  const components = [LiveLectureTueMay19, LiveLectureThuMay21]
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
