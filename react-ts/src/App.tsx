import { Fragment } from "react/jsx-runtime"
import "./App.css"
import D11 from "./D11 React UI"
import D12 from "./D12 Interacivity"
import LearnReact from "./LearnReact"
import D13 from "./D13 Lifecycles and useEffect"
import D16 from "./D16 Patterns"
import D18 from "./D18 Context and useReducer"

/**
 * Get the display content for the components
 * @param components to display
 * @returns components with <hr> between them and <br> at the end
 */
const getDisplayContent = (components: React.ComponentType[]) => {
  const displayContent = []
  for (let i = 0; i < components.length - 1; i++) {
    const Comp = components[i]
    displayContent.push(
      <Fragment key={`${i} component`}>
        <Comp />
        <hr className="hr1" />
      </Fragment>
    )
  }
  const Last = components[components.length - 1]
  displayContent.push(<Last key={`${components.length - 1} component`} />)

  for (let i = 0; i < 12; i++) {
    displayContent.push(<br key={`${i} br`} />)
  }

  return displayContent
}

function App() {
  // const components = [D11, D12, D13, D16, D18, LearnReact]
  const components = [D18]
  const displayContent = getDisplayContent(components)

  return <div className="app">{displayContent}</div>
}

export default App
