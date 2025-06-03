import LiveLectureTueMay27 from "./LiveLectureTueMay27/LiveLectureTueMay27"
import Counter from "./LiveLectureTueMay27/Counter"
import DocMaterials from "./DocMaterials"

export default function D12() {
  const components = [DocMaterials, LiveLectureTueMay27, Counter]
  return (
    <div className="day12-Interactivity">
      <h1>D12 Adding Interactivity</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
