import { getDisplayContent } from "../../utils/utility functions"
import LifecycleMethods from "./1-Lifecycle Methods"
import UseEffect from "./2-useEffect"
import UseEffect2 from "./2-useEffect/index2"

export default function DocMaterials() {
  const components = [LifecycleMethods, UseEffect, UseEffect2]
  const displayContent = getDisplayContent(components, "hr2")
  return (
    <div className="doc-materials">
      <h2>Google Doc Materials</h2>
      {displayContent}
    </div>
  )
}
