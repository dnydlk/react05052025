import { useState } from "react"
import "./App.css"

import Input from "./Input"
import TaskList from "./TaskList"
import { sortGoals } from "./util"
import {
  fitnessCategories,
  fitnessCategoriesId,
  fitnessCategoriesValues,
  initialGoalObjArr,
} from "./data"
import type { GoalType } from "./lib/types"
import MyButton from "./MyButton"
import MySelect from "./MySelect"

export default function App() {
  const [goals, setGoals] = useState(initialGoalObjArr)
  const [goalInput, setGoalInput] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState(fitnessCategoriesId[0])
  const [numberValue, setNumberValue] = useState("")
  const [currentId, setCurrentId] = useState(initialGoalObjArr.length)

  const handleCategoryChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryId(value as GoalType["category"])
  }

  const toggleAchieve = (goalId: number) => {
    setGoals(
      sortGoals(
        goals.map((g) => {
          if (g.id === goalId) return { ...g, isAchieved: !g.isAchieved }
          else return g
        })
      )
    )
  }
  const handleDeleteGoal = (goalId: number) => {
    setGoals(goals.filter(({ id }) => id !== goalId))
  }

  const handleAddGoal = () => {
    if (!goalInput.trim() || !numberValue) return

    const newGoal: GoalType = {
      id: currentId + 1,
      title: goalInput,
      category: selectedCategoryId,
      number: Number(numberValue),
      exerciseType:
        selectedCategoryId === fitnessCategoriesId[0] ? "repetitions" : "minutes",
      isAchieved: false,
    }
    setGoals(sortGoals([...goals, newGoal]))
    setCurrentId((prevId) => prevId + 1)
    setGoalInput("")
    setNumberValue("")
  }

  const categoryOptions = fitnessCategories.map((_, index) => {
    return (
      <option key={fitnessCategoriesId[index]} value={fitnessCategoriesId[index]}>
        {fitnessCategoriesValues[index]}
      </option>
    )
  })

  return (
    <div className="fitness-goal-tracker">
      <h2>Fitness Goal Tracker V2</h2>
      <Input
        name="goal-input"
        label={"Fitness Goal"}
        placeholder={"fitness goal"}
        value={goalInput}
        onChange={setGoalInput}
      />

      <MySelect
        label="Category"
        name="selected-category"
        value={selectedCategoryId}
        onChangeFn={handleCategoryChange}
        options={categoryOptions}
      />

      {selectedCategoryId === fitnessCategoriesId[0] ? (
        <Input
          name="repetitions-input"
          label={"Repetitions"}
          placeholder={"repetitions"}
          value={numberValue}
          onChange={setNumberValue}
        />
      ) : (
        <Input
          name="minutes-input"
          label={"Minutes"}
          placeholder={"minutes"}
          value={numberValue}
          type="number"
          onChange={setNumberValue}
        />
      )}

      <div>
        <MyButton className="add-btn" onClickFn={handleAddGoal} buttonText="Add Goal" />
      </div>

      <TaskList
        goals={goals}
        handleDeleteGoal={handleDeleteGoal}
        toggleAchieve={toggleAchieve}
      />
    </div>
  )
}
