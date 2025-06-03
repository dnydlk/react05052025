import { getDisplayContent } from "../../utils/utility functions"
import ContextAPI from "./1-Context API"

export default function DocMaterials() {
  const components = [ContextAPI]
  const displayContent = getDisplayContent(components, "hr2")
  return (
    <div className="d18-doc-materials">
      <h2>Google Doc Materials</h2>
      {displayContent}
    </div>
  )
}
