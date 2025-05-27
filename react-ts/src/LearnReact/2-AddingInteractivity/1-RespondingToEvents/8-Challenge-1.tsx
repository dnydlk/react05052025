export default function Challenge1() {
  return (
    <div className="8-challenge-1">
      <h4>Chalenge 1: Fix an event handler</h4>
      <LightSwitch />
    </div>
  )
}

const LightSwitch = () => {
  const handleClick = () => {
    document.body.style.backgroundColor =
      document.body.style.backgroundColor === "white" ? "black" : "white"
  }

  return <button onClick={() => handleClick()}>Toggle the Lights</button>
}
