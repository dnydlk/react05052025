import DocMaterials from "./DocMaterials"
import Day18LiveLecture from "./LiveLecture"

export default function D18() {
  // const components = [DocMaterials, Day18LiveLecture]
  ////  [note]: temporarily only displaying Day18LiveLecture
  const components = [DocMaterials, Day18LiveLecture]
  return (
    <div className="day18-context-and-use-reducer">
      <h1>D18 Context & useReducer</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
