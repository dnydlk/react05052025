import { useContext } from "react"
import TaskItem from "./TaskItem"
import { GoalsContext } from "../context/TodoCentext"

export default function TaskList() {
  const goalsContext = useContext(GoalsContext)
  if (!goalsContext) {
    console.log("📌 ~ TaskList ~ goalsContext:", goalsContext)
    return null
  }
  const { goals, toggleAchieve, handleDeleteGoal } = goalsContext

  return (
    <>
      {goals.map(({ id, title, category, number, exerciseType, isAchieved }) => {
        return (
          <div className="task" key={id}>
            <TaskItem
              id={id}
              title={title}
              category={category}
              number={number}
              exerciseType={exerciseType}
              isAchieved={isAchieved}
              handleDeleteGoal={handleDeleteGoal}
              toggleAchieve={toggleAchieve}
            />
          </div>
        )
      })}
    </>
  )
}
