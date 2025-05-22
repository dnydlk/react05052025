import { useState } from "react"
import StateExample from "./StateExample"
import StateExercise from "./StateExercise"
import SateWithArray from "./SateWithArray"

export default function States() {
  const [age, setAge] = useState(0)
  const increaseAge = () => setAge((prevAge) => prevAge + 1)
  const decreaseAge = () => setAge((prevAge) => prevAge - 1)
  const resetAge = () => setAge(0)

  const [inputVal, setInputVal] = useState("")
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.value);
    setInputVal(event.target.value)
  }

  return (
    <div id="states">
      <h3>States</h3>
      <div className="myFlexBox">
        <h1>{age}</h1>
      </div>
      <div className="myFlexBox">
        <button onClick={increaseAge}>Increase Age</button>
        <button onClick={resetAge}>Reset Age</button>
        <button onClick={decreaseAge}>Decrease Age</button>
      </div>
      <br />
      {inputVal}
      <br />
      <input type="text" onChange={handleInputChange} />
      <br />
      <br />
      <StateExample />
      <br />
      <br />
      <StateExercise />
      <br />
      <SateWithArray />
    </div>
  )
}
