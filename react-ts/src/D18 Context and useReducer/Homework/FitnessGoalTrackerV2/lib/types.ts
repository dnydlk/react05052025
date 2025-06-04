import type { JSX } from "react"

type InputProps = {
  label: string
  name: string
  placeholder: string
  value: string
  type?: string
  onChange: React.Dispatch<React.SetStateAction<string>>
}

type CategoryType = "cardio" | "strenth-traning"
type ExerciseType = "minutes" | "repetitions"

type GoalType = {
  id: number
  title: string
  category: CategoryType
  number: number
  exerciseType: ExerciseType
  isAchieved: boolean
}

type DeleteGoalHandler = (goalId: number) => void
type AchieveGoalHandler = (goalId: number) => void

type GoalHandlers = {
  handleDeleteGoal: DeleteGoalHandler
  toggleAchieve: AchieveGoalHandler
}

type TaskItemProps = GoalType & GoalHandlers

type TaskListProps = {
  goals: GoalType[]
} & GoalHandlers

type MyButtonProps = {
  className: string
  onClickFn: React.MouseEventHandler<HTMLButtonElement>
  buttonText: string
}

type MySelectProps = {
  label: string
  name: string
  value: string
  onChangeFn: React.ChangeEventHandler<HTMLSelectElement>
  options: JSX.Element[]
}

export type {
  InputProps,
  GoalType,
  TaskItemProps,
  CategoryType,
  TaskListProps,
  MyButtonProps,
  MySelectProps,
}
