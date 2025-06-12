import DocMaterials from "./DocMaterials"
import Day17LiveLecture from "./LiveLecture"

export default function D17() {
  const components = [DocMaterials, Day17LiveLecture]
  // - [note]: temporarily only displaying DocMaterials
  // const components = [DocMaterials]
  return (
    <div className="day16-patterns">
      <h1>D16 Patterns</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
