export default function Challenge4() {
  return (
    <div className="4-challenge-4">
      <h4>Chalenge 4: Remove unnecessary state</h4>
      <FeedbackForm />
    </div>
  )
}

const FeedbackForm = () => {
  function handleClick() {
    const name = prompt("What is your name?")
    alert(`Hello, ${name}!`)
  }

  return <button onClick={handleClick}>Greet</button>
}
