import { useState } from "react"
import "./MyApp.css"
import { AlertButton, ButtonWithState, SimpleButton } from "./MyButtons"
import Profile from "./Profile"
import ShoppingList from "./ShoppingList"

export default function MyApp() {
  const [buttonCount, setButtonCount] = useState(0)
  const handleClick = () => setButtonCount(buttonCount + 1)
  return (
    <div>
      <h1>Welcome to my app</h1>
      <SimpleButton />
      <AboutPage />
      <Profile />
      <ShoppingList />
      <AlertButton />
      <p>Counters that update separatly</p>
      <ButtonWithState />
      <ButtonWithState />
      <p>Counters that update together</p>
      <ButtonWithState count={buttonCount} onClick={handleClick} />
      <ButtonWithState count={buttonCount} onClick={handleClick} />
    </div>
  )
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>
        Hello there. <br />
        How do you do?
      </p>
    </>
  )
}
