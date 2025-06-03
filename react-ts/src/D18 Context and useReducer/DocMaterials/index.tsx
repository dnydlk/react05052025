import { getDisplayContent } from "../../utils/utility functions"
import ContextAPI from "./1-Context API"
import UseReducer from "./2-useReducer"

export default function DocMaterials() {
  // const components = [ContextAPI, UseReducer]
  // - [info]: temporarily only displayed ContextAPI
  const components = [ContextAPI]
  const displayContent = getDisplayContent(components, "hr2")
  return (
    <div className="d18-doc-materials">
      <h2>Google Doc Materials</h2>
      {displayContent}
    </div>
  )
}
