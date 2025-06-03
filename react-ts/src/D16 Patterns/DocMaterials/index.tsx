import { getDisplayContent } from "../../utils/utility functions"
import HigherOrderComponents from "./01-Higher Order Components"
import UseRef from "./02-useRef"
import CustomHooks from "./03-Custom Hook"

export default function DocMaterials() {
  const components = [HigherOrderComponents, UseRef, CustomHooks]
  const displayContent = getDisplayContent(components, "hr2")
  return (
    <div className="doc-materials">
      <h2>Google Doc Materials</h2>
      {displayContent}
    </div>
  )
}
