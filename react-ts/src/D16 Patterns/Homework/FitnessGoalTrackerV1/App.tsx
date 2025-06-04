import { useState } from "react"
import "./app.css"
import {
  fitnessCategories,
  fitnessCategoriesId,
  fitnessCategoriesValues,
  initialGoalObjArr,
  type GoalType,
} from "./data"

const sortGoals = (goals: GoalType[]) =>
  goals.sort((a, b) => {
    if (a.isAchieved === b.isAchieved) return 0
    return a.isAchieved ? 1 : -1
  })

export default function App() {
  const [goals, setGoals] = useState(initialGoalObjArr)
  const [goalInput, setGoalInput] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState(fitnessCategoriesId[0])
  const [numberValue, setNumberValue] = useState("")
  const [currentId, setCurrentId] = useState(initialGoalObjArr.length)

  const handleCategoryChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryId(value)
  }

  const toggleAchieve = (id: number) => {
    setGoals(
      sortGoals(
        goals.map((g) => {
          if (g.id === id) return { ...g, isAchieved: !g.isAchieved }
          else return g
        })
      )
    )
  }
  const handleDeleteGoal = (toDeleteId: number) =>
    setGoals(goals.filter(({ id }) => id !== toDeleteId))

  const handleAddGoal = () => {
    if (!goalInput.trim() || !numberValue) return

    const newGoal: GoalType = {
      id: currentId + 1,
      goal: goalInput,
      category: selectedCategoryId,
      number: Number(numberValue),
      type: selectedCategoryId === fitnessCategoriesId[0] ? "repetitions" : "minutes",
      isAchieved: false,
    }
    setGoals(sortGoals([...goals, newGoal]))
    setCurrentId((prevId) => prevId + 1)
    setGoalInput("")
    setNumberValue("")
  }

  const categoryOptionsContent = fitnessCategories.map((_, index) => {
    return (
      <option key={fitnessCategoriesId[index]} value={fitnessCategoriesId[index]}>
        {fitnessCategoriesValues[index]}
      </option>
    )
  })

  const taksContent = goals.map(({ id, goal, category, number, type, isAchieved }) => {
    return (
      <div className="task" key={id}>
        <p>
          {goal} -{" "}
          <b>
            {category
              .split("-")
              .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
              .join(" ")}
          </b>{" "}
          ({number} {type})
        </p>
        {isAchieved && (
          <button className="delete-btn" onClick={() => handleDeleteGoal(id)}>
            X
          </button>
        )}
        <button
          className={`mark-btn ${isAchieved ? "achieved-btn" : ""}`}
          onClick={() => toggleAchieve(id)}>
          Mark as {isAchieved ? "Unachieved" : "Achieved"}
        </button>
      </div>
    )
  })

  return (
    <div className="fitness-goal-tracker">
      <h2>Fitness Goal Tracker V1</h2>
      <div>
        <label htmlFor="fitness-goal">Fitness Goal</label>
        <input
          id="fitness-goal"
          placeholder="Enter fitness goal"
          value={goalInput}
          onChange={(e) => setGoalInput(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select
          name="selected-category"
          id="category"
          value={selectedCategoryId}
          onChange={handleCategoryChange}>
          {categoryOptionsContent}
        </select>
      </div>

      {selectedCategoryId === fitnessCategoriesId[0] ? (
        <div>
          <label htmlFor="number-of-times">Repetitions</label>
          <input
            id="number-of-times"
            placeholder="Enter repetitions"
            type="number"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </div>
      ) : (
        <div>
          <label htmlFor="number-of-times">Minutes</label>
          <input
            id="number-of-times"
            placeholder="Enter minutes"
            type="number"
            value={numberValue}
            onChange={(e) => setNumberValue(e.target.value)}
          />
        </div>
      )}

      <div>
        <button className="add-btn" onClick={handleAddGoal}>
          Add Goal
        </button>
      </div>

      {taksContent}
    </div>
  )
}
