import Components from "./ClassMaterials/Components"
import Lists from "./ClassMaterials/Lists"
import Rendering from "./ClassMaterials/Rendering"
import States from "./ClassMaterials/States"
import InClass from "./InClass"
import Welcome from "./ClassMaterials/ClassComponents"

export default function D12() {
  const components = [InClass, Components, Rendering, Lists, States, Welcome]
  return (
    <div className="D12">
      <h1>D12</h1>
      {components.map((Component, index) => {
        return (
          <div key={index}>
            <Component /> <hr className="hr2" />
          </div>
        )
      })}
    </div>
  )
}
