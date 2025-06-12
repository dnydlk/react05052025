import "./App.css"
import { getDisplayContent } from "./utils/utility functions"
import D11 from "./D11 React UI"
import D12 from "./D12 Interacivity"
import LearnReact from "./LearnReact"
import D13 from "./D13 Lifecycles and useEffect"
import D16 from "./D16 Patterns"
import D18 from "./D18 Context and useReducer"
import D20 from "./D20 Redux"
import D21 from "./D21 Routing"
import D17 from "./D17 Performance"

function App() {
  // const components = [D11, D12, D13, D16, D17, D18, D20, D21, LearnReact]
  // - [note]: temporarily only displayed D17
  const components = [D17]
  const displayContent = getDisplayContent(components, "hr1")

  return <div className="app">{displayContent}</div>
}

export default App
