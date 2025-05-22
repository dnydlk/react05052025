import { useState } from "react"

export default function SateWithArray() {
  const [foods, setFoods] = useState(["Apples", "Oranges", "Bananas"])
  const [input, setInput] = useState("")

  const handleAddFood = () => {
    // BP: Trim only after sumbit
    if (input.trim().length === 0) return
    // Spread Operator
    setFoods((f) => [...f, input.trim()])
    setInput("")
  }
  const handleRemoveFood = (index: number) => {
    //* parameter as _ is to ignore the parameter
    // BP: Do everthin inside a call back for setState
    setFoods((prevFoods) => prevFoods.filter((_, i) => i !== index))
  }

  const handleKeyDownEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleAddFood()
  }

  return (
    <div id="sate-with-array">
      <h4>Sate With Array</h4>
      <ol>
        {foods.map((food, index) => {
          // ? () => handleRemoveFood(index) why not handleRemoveFood(index)
          // * onClick={handleRemoveFood(index)} will be fired everytime component renders, WON'T WAIT FOR the click event to happen
          // * onClick={EXPECT A FUNCTION}, so onClick={() => myHandler(potentialParams)} is the BP
          return (
            <li
              key={index}
              onClick={() => handleRemoveFood(index)}
              style={{ cursor: "pointer" }}>
              {food}
            </li>
          )
        })}
      </ol>

      <input
        type="text"
        id="food-input"
        placeholder="Enter Food Name"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => handleKeyDownEnter(e)}
        value={input}
      />
      <button onClick={handleAddFood}>Add Food</button>
    </div>
  )
}
