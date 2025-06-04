import TaskItem from "./TaskItem"
import { useGoalsContext } from "../context/GoalsContext"

export default function TaskList() {
  const { goals, toggleAchieve, handleDeleteGoal } = useGoalsContext()

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
