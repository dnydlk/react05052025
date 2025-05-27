import { useState } from "react"

export default function Challenge2() {
  return (
    <div className="2-challenge-2">
      <h4>Chalenge 2: Fix stuck form inputs</h4>
      <Form />
    </div>
  )
}

const Form = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  function handleReset() {
    setFirstName("")
    setLastName("")
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <h1>
        Hi, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  )
}
