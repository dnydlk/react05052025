import { useContext, useState } from "react"
import type { GoalType } from "./lib/types"
import {
  fitnessCategories,
  fitnessCategoriesId,
  fitnessCategoriesValues,
  initialGoalObjArr,
} from "./data"
import { GoalsContext } from "./context/GoalsCentext"
import MyInput from "./components/MyInput"
import MySelect from "./components/MySelect"
import MyButton from "./components/MyButton"

export default function GoalForm() {
  const [goalInput, setGoalInput] = useState("")
  const [numberValue, setNumberValue] = useState("")
  const [currentId, setCurrentId] = useState(initialGoalObjArr.length)
  const [selectedCategoryId, setSelectedCategoryId] = useState(fitnessCategoriesId[0])

  const goalsContext = useContext(GoalsContext)
  if (!goalsContext) {
    console.log("📌 ~ GoalForm ~ goalsContext:", goalsContext)
    return null
  }
  const { addGoal } = goalsContext

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

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
    addGoal(newGoal)
    setCurrentId((prevId) => prevId + 1)
    setGoalInput("")
    setNumberValue("")
  }

  const handleCategoryChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategoryId(value as GoalType["category"])
  }

  const categoryOptions = fitnessCategories.map((_, index) => {
    return (
      <option key={fitnessCategoriesId[index]} value={fitnessCategoriesId[index]}>
        {fitnessCategoriesValues[index]}
      </option>
    )
  })

  return (
    <form onSubmit={handleSubmit}>
      <MyInput
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
        <MyInput
          name="repetitions-input"
          label={"Repetitions"}
          placeholder={"repetitions"}
          value={numberValue}
          type="number"
          onChange={setNumberValue}
        />
      ) : (
        <MyInput
          name="minutes-input"
          label={"Minutes"}
          placeholder={"minutes"}
          value={numberValue}
          type="number"
          onChange={setNumberValue}
        />
      )}

      <div>
        <MyButton className="add-btn" buttonText="Add Goal" />
      </div>
    </form>
  )
}
