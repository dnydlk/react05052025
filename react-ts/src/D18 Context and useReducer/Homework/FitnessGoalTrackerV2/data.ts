import type { CategoryType, GoalType } from "./lib/types"

const fitnessCategories = ["strenth traning", "cardio"]
const fitnessCategoriesId: CategoryType[] = ["strenth-traning", "cardio"]
const fitnessCategoriesValues = fitnessCategories.map((c) =>
  c
    .split(" ")
    .map((e) => e.charAt(0).toUpperCase() + e.slice(1))
    .join(" ")
)
const initialGoalObjArr: GoalType[] = [
  {
    id: 1,
    title: "Run 5 kilometers",
    category: "cardio",
    number: 30,
    exerciseType: "minutes",
    isAchieved: false,
  },
  {
    id: 2,
    title: "Do 20 push-ups",
    category: "strenth-traning",
    number: 20,
    exerciseType: "repetitions",
    isAchieved: true,
  },
]

export {
  fitnessCategories,
  fitnessCategoriesId,
  fitnessCategoriesValues,
  initialGoalObjArr,
}
