const fitnessCategories = ["strenth traning", "cardio"]
const fitnessCategoriesId = fitnessCategories.map((c) => c.split(" ").join("-"))
const fitnessCategoriesValues = fitnessCategories.map((c) =>
  c
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(" ")
)
const initialGoalObjArr = [
  {
    id: 1,
    goal: "Run 5 kilometers",
    category: "cardio",
    number: 30,
    type: "minutes",
    isAchieved: false,
  },
  {
    id: 2,
    goal: "Do 20 push-ups",
    category: "strenth-traning",
    number: 20,
    type: "repetitions",
    isAchieved: true,
  },
]
type GoalType = {
  id: number
  goal: string
  category: string
  number: number
  type: string
  isAchieved: boolean
}

export {
  fitnessCategories,
  fitnessCategoriesId,
  fitnessCategoriesValues,
  initialGoalObjArr,
}

export type { GoalType }
