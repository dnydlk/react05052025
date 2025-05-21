export default function Rendering() {
  const age = 18
  const isGreen = true
  return (
    <div id="rendering">
      <h2>Rendering</h2>
      <div className="myFlexBox">
        <h3>Age: {age}</h3>
        {age >= 18 ? <h3>OVER AGE</h3> : <h3>UNDER AGE</h3>}
      </div>

      <div className="myFlexBox">
        <h3>isGreen: {isGreen.toString()}</h3>
        <h3 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h3>
      </div>
      {isGreen && <button>This is a button</button>}
    </div>
  )
}
