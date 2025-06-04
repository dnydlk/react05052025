import type { GoalType } from "./lib/types"

const sortGoals = (goals: GoalType[]) =>
  goals.sort((a, b) => {
    if (a.isAchieved === b.isAchieved) return 0
    return a.isAchieved ? 1 : -1
  })

export { sortGoals }
