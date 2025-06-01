import BestPractice from "."
import { UserContextProvider } from "./UserContext"

export default function App() {
  return (
    <UserContextProvider>
      <BestPractice />
    </UserContextProvider>
  )
}
