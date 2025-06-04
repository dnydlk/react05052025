import "./App.css"
import TaskList from "./components/TaskList"
import { GoalsProvider } from "./context/GoalsCentext"
import GoalForm from "./components/GoalForm"

export default function App() {
  return (
    <GoalsProvider>
      <div className="fitness-goal-tracker">
        <h2>Fitness Goal Tracker V2</h2>
        <GoalForm />
        <TaskList />
      </div>
    </GoalsProvider>
  )
}
