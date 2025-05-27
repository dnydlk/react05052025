import { useState } from "react"

export default function Challenge3() {
  return (
    <div className="3-challenge-3">
      <h4>Chalenge 3: Fix a crash</h4>
      <FeedbackForm />
    </div>
  )
}

const FeedbackForm = () => {
  const [isSent, setIsSent] = useState(false)
  const [message, setMessage] = useState("")
  if (isSent) {
    return <h1>Thank you!</h1>
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert(`Sending: "${message}"`)
        setIsSent(true)
      }}>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <br />
      <button type="submit">Send</button>
    </form>
  )
}
