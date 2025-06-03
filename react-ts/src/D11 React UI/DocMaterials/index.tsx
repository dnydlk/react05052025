import Components from "./Components"
import Lists from "./Lists"
import Rendering from "./Rendering"
import States from "./States"
import Welcome from "./ClassComponents"
import { getDisplayContent } from "../../utils/utility functions"

export default function DocMaterials() {
  const components = [Components, Rendering, Lists, States, Welcome]
  const displatContent = getDisplayContent(components, "hr2")

  return (
    <div className="doc-materials">
      <h2>Goolge Doc Materials</h2>
      {displatContent}
    </div>
  )
}
