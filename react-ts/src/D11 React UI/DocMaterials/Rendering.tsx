export default function Rendering() {
  const age = 18
  const isGreen = true
  return (
    <div className="rendering">
      <h3>Rendering</h3>
      <div className="myFlexBox">
        <h4>Age: {age}</h4>
        {age >= 18 ? <h3>OVER AGE</h3> : <h3>UNDER AGE</h3>}
      </div>

      <div className="myFlexBox">
        <h4>isGreen: {isGreen.toString()}</h4>
        <h4 style={{ color: isGreen ? "green" : "red" }}>THIS HAS COLOR</h4>
      </div>
      {isGreen && <button>This is a button</button>}
    </div>
  )
}
