import { useState } from "react"

export default function Car() {
  const [state, setState] = useState({
    brand: "Ford",
    model: "Mustang",
    color: "red",
    year: 1964,
  })
  const changeColor = () => {
    setState({ ...state, color: state.color === "red" ? "blue" : "red" })
  }

  return (
    <div>
      <p>
        My {state.brand} is a {state.color} {state.model} from {state.year}.
      </p>
      <button type="button" onClick={changeColor}>
        Change color
      </button>
    </div>
  )
}
