import { useState } from "react"

interface Car {
  year: number
  make: string
  model: string
}

type InputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void

export default function UpdateStateOfObject() {
  const [car, setCar] = useState<Car>({
    year: 2025,
    make: "Honda",
    model: "Civic",
  })

  const handleInputChange: InputChangeHandler = ({ target: { name, value } }) => {
    setCar((prevCar) => ({ ...prevCar, [name]: value }))
  }

  return (
    <div className="update-state-of-object">
      <h3>Update State Of Object</h3>
      <p>
        Your Favorite Car is {car.year} {car.make} {car.model}
      </p>
      <input type="number" name="year" value={car.year} onChange={handleInputChange} />
      <br />
      <input type="text" name="make" value={car.make} onChange={handleInputChange} />
      <br />
      <input type="text" name="model" value={car.model} onChange={handleInputChange} />
      <br />
    </div>
  )
}
