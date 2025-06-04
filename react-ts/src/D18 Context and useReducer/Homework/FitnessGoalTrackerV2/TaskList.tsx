import type { TaskListProps } from "./lib/types"
import TaskItem from "./TaskItem"

export default function TaskList({
  goals,
  handleDeleteGoal,
  toggleAchieve,
}: TaskListProps) {
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
