import "./App.css"
import TaskList from "./components/TaskList"
import { GoalsProvider } from "./context/GoalsContext"
import GoalForm from "./components/GoalForm"
import { ThemeProvider } from "./context/ThemeContext"
import ThemeToggle from "./components/ThemeToggle"

export default function App() {
  return (
    <ThemeProvider>
      <GoalsProvider>
        <div className="fitness-goal-tracker">
          <ThemeToggle />
          <h2>Fitness Goal Tracker V2</h2>
          <GoalForm />
          <TaskList />
        </div>
      </GoalsProvider>
    </ThemeProvider>
  )
}
