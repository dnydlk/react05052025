import { getDisplayContent } from "../../../utils/utility functions"
import App from "./App"
import HOCFunctionalComponent from "./HOCFunctionalComponent"

export default function HigherOrderComponents() {
  const components = [App, HOCFunctionalComponent]
  const displayContent = getDisplayContent(components, "hr0")
  return (
    <div className="higher-order-components">
      <h3>Higher Order Components</h3>
      {displayContent}
    </div>
  )
}
