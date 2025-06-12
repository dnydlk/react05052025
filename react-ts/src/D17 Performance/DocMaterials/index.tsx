import { getDisplayContent } from "../../utils/utility functions"
import ReactMemo from "./01-React.memo"
import PureComponent from "./02-Pure Components"
import UseMemo from "./03-useMemo"
import UseCallback from "./04-useCallback"

export default function DocMaterials() {
  // const components = [ReactMemo, PureComponent, UseMemo, UseCallback]
  const components = [UseCallback]
  const displayContent = getDisplayContent(components, "hr2")
  return (
    <div className="doc-materials">
      <h2>Google Doc Materials</h2>
      {displayContent}
    </div>
  )
}
