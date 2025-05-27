export default function AddingEventHandlers() {
  return (
    <div className="adding-event-handlers">
      <h4>Adding Event Handlers</h4>
      <MyButton />
    </div>
  )
}

const MyButton = () => {
  const handleClick = () => alert("You Clicked me!")

  // return <button onClick={handleClick}>I Don't Do Anything</button>
  // return <button onClick={() => handleClick()}>I Don't Do Anything</button>
  return <button onClick={() => alert("You Clikced me!")}>I Don't Do Anything</button>
}
