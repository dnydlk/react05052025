import DocMaterials from "./DocMaterials"
import LiveLectureWedMay28 from "./LiveLectureWedMay28/LiveLectureWedMay28"

export default function D13() {
  const components = [DocMaterials, LiveLectureWedMay28]
  return (
    <div className="day13-lifecyles-and-use-effect">
      <h1>D13 Lifecycle Methods and useEffect</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
