import DocMaterials from "./DocMaterials"
import Day17LiveLecture from "./LiveLecture"

export default function D17() {
  // const components = [DocMaterials, Day17LiveLecture]
  const components = [Day17LiveLecture]
  return (
    <div className="day16-patterns">
      <h1>D17 Performance</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
