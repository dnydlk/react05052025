import DocMaterials from "./DocMaterials"
import LiveLectureTueMay19 from "./LiveLectureTueMay19"
import LiveLectureThuMay21 from "./LiveLectureThuMay21"

export default function D11() {
  const components = [DocMaterials, LiveLectureTueMay19, LiveLectureThuMay21]
  return (
    <div className="day-11">
      <h1>D11</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
