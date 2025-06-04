import DocMaterials from "./DocMaterials"
import Homework from "./Homework/FitnessGoalTrackerV2"
import Day18LiveLecture from "./LiveLecture"

export default function D18() {
  // const components = [DocMaterials, Day18LiveLecture]
  //- [note]: temporarily only displaying Homework
  const components = [Homework]
  return (
    <div className="day18-context-and-use-reducer">
      <h1>D18 Context & useReducer</h1>
      {components.map((Component, i) => {
        return <Component key={`${i} Component`} />
      })}
    </div>
  )
}
