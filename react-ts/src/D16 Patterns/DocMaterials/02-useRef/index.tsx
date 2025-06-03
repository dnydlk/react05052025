import { getDisplayContent } from "../../../utils/utility functions"
import FocusATextElement from "./1-FocusATextElement"
import App from "./App"

export default function UseRef() {
  const components = [App, FocusATextElement]
  const displayContent = getDisplayContent(components, "hr0")
  return (
    <div className="use-ref">
      <h3>useRef</h3>
      {displayContent}
    </div>
  )
}
