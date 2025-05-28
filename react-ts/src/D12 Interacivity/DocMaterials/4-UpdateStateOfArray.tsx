import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

type FoodsType = [string, string][]
type FoodType = [string, string]

const initialFoods: FoodsType = [
  [uuidv4(), "Apple"],
  [uuidv4(), "Orange"],
  [uuidv4(), "Banana"],
]

export default function UpdateStateOfArray() {
  const [food, setFood] = useState("")
  const [foods, setFoods] = useState<[string, string][]>(initialFoods)

  const handleAddFood = () => {
    const newFood: FoodType = [uuidv4(), food]
    setFoods((prevFoods) => [...prevFoods, newFood])
    setFood("")
  }

  // const handleRemoveFood = (index) => setFoods(foods.filter((_, i) => i !== index))
  const handleRemoveFood = (food: FoodType) =>
    setFoods(foods.filter((f) => f[0] !== food[0]))

  return (
    <div className="update-state-of-array">
      <h3>Update State Of Array</h3>
      <h4>List of Food</h4>
      <ul>
        {foods.map((f) => {
          return (
            <li
              key={f[0]}
              onClick={() => handleRemoveFood(f)}
              style={{ cursor: "pointer" }}>
              {f[1]}
            </li>
          )
        })}
      </ul>
      <input
        type="text"
        id="food-input"
        placeholder="Enter Food Name Here"
        onChange={(e) => setFood(e.target.value)}
        value={food}
      />
      <button onClick={() => handleAddFood()}>Add Food</button>
    </div>
  )
}
