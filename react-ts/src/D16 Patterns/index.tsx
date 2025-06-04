import DocMaterials from "./DocMaterials"
import Homework from "./Homework"


export default function D16() {
  // const components = [DocMaterials, Homework]
  // - [note]: temporarily only displaying Homework
  const components = [Homework]
  return (
    <div className="day16-patterns">
      <h1>D16 Patterns</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
