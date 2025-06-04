import { createContext, useState } from "react"
import { initialGoalObjArr } from "../data"
import { sortGoals } from "../util"
import type { AchieveGoalHandler, DeleteGoalHandler, GoalType } from "../lib/types"

type GoalsContextType = {
  goals: GoalType[]
  toggleAchieve: AchieveGoalHandler
  handleDeleteGoal: DeleteGoalHandler
  addGoal: (newGoal: GoalType) => void
}

export const GoalsContext = createContext<GoalsContextType | null>(null)

export function GoalsProvider({ children }: { children: React.ReactElement }) {
  const [goals, setGoals] = useState(initialGoalObjArr)

  const handleDeleteGoal = (goalId: number) => {
    setGoals(goals.filter(({ id }) => id !== goalId))
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

  const addGoal = (newGoal: GoalType) => setGoals(sortGoals([...goals, newGoal]))

  return (
    <GoalsContext.Provider value={{ goals, toggleAchieve, handleDeleteGoal, addGoal }}>
      {children}
    </GoalsContext.Provider>
  )
}
