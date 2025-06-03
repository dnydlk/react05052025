import { useReducer } from "react"

type State = { count: number }
type Action = { type: "increment" } | { type: "decrement" }

const ACTIONS = {
  INCREMENT: "increment" as const,
  DECREMENT: "decrement" as const,
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  const increment = () => dispatch({ type: ACTIONS.INCREMENT })
  const decrement = () => dispatch({ type: ACTIONS.DECREMENT })

  return (
    <>
      <h4>Button with useReducer</h4>
      <button onClick={decrement}>-</button>
      <span>{state.count}</span>
      <button onClick={increment}>+</button>
    </>
  )
}
