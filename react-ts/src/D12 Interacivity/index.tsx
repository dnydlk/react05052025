import LiveLectureTueMay27 from "./LiveLectureTueMay27/LiveLectureTueMay27"
import Counter from "./LiveLectureTueMay27/Counter"
import DocMaterials from "./DocMaterials"
import Homework from "./Homework"

export default function D12() {
  // const components = [LiveLectureTueMay27, Counter, DocMaterials, Homework]
  const components = [Homework]
  return (
    <div className="day-12">
      <h1>D12</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
