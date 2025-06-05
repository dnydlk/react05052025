import "./App.css"
import D11 from "./D11 React UI"
import D12 from "./D12 Interacivity"
import LearnReact from "./LearnReact"
import D13 from "./D13 Lifecycles and useEffect"
import D16 from "./D16 Patterns"
import D18 from "./D18 Context and useReducer"
import { getDisplayContent } from "./utils/utility functions"

function App() {
  const components = [D11, D12, D13, D16, D18, LearnReact]
  // // - [note]: temporarily only displayed D19
  const displayContent = getDisplayContent(components, "hr1")

  return <div className="app">{displayContent}</div>
}

export default App
