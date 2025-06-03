import { getDisplayContent } from "../../utils/utility functions"
import ClassComponentWithButton from "./1-ClassComponentWithButton"
import FormControl from "./2-FormControl"
import UpdateStateOfObject from "./3-UpdateStateOfObject"
import UpdateStateOfArray from "./4-UpdateStateOfArray"

export default function DocMaterials() {
  const components = [
    ClassComponentWithButton,
    FormControl,
    UpdateStateOfObject,
    UpdateStateOfArray,
  ]
  const displatContent = getDisplayContent(components, "hr2")
  return (
    <div className="doc-materials">
      <h2>Goolge Doc Materials</h2>
      {displatContent}
    </div>
  )
}
