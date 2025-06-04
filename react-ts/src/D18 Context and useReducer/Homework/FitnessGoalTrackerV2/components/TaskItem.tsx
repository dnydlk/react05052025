import type { TaskItemProps } from "../lib/types"
import MyButton from "./MyButton"

export default function TaskItem({
  id,
  title,
  category,
  number,
  exerciseType,
  isAchieved,
  handleDeleteGoal,
  toggleAchieve,
}: TaskItemProps) {
  return (
    <>
      <p>
        {title} -{" "}
        <b>
          {category
            .split("-")
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
            .join(" ")}
        </b>{" "}
        ({number} {exerciseType})
      </p>
      {isAchieved && (
        <MyButton
          className="delete-btn"
          onClickFn={() => handleDeleteGoal(id)}
          buttonText="X"
        />
      )}
      <MyButton
        className={`mark-btn ${isAchieved ? "achieved-btn" : ""}`}
        onClickFn={() => toggleAchieve(id)}
        buttonText={isAchieved ? "Unachieved" : "Achieved"}
      />
    </>
  )
}
