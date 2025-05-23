import Components from "./Components"
import Lists from "./Lists"
import Rendering from "./Rendering"
import States from "./States"
import Welcome from "./ClassComponents"

export default function ClassMaterials() {
  return (
    <div className="class-materials">
      <h2>Class Materials</h2>
      <Components />
      <hr className="hr2" />
      <Rendering />
      <hr className="hr2" />
      <Lists />
      <hr className="hr2" />
      <States />
      <hr className="hr2" />
      <Welcome />
    </div>
  )
}
