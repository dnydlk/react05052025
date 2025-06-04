import { createContext, useContext, useState } from "react"
import { initialGoalObjArr } from "../data"
import { sortGoals } from "../util"
import type { GoalsContextTypes, GoalType } from "../lib/types"

const GoalsContext = createContext<GoalsContextTypes | null>(null)

export const useGoalsContext = () => {
  const context = useContext(GoalsContext)
  if (!context) {
    throw new Error("useGoals must be used within GoalsProvider")
  }
  return context
}

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
