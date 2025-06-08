import { useDispatch, useSelector } from "react-redux"
import { buyHotdog } from "../redux/actions"
import { useState } from "react"

export default function HotdogContainer() {
  const numOfHotdog = useSelector((state) => state.hotdog.numOfHotdog)
  const dispatch = useDispatch()
  const [num, setNum] = useState(1)

  return (
    <div>
      <h2>Num of Hotdogs - {numOfHotdog}</h2>
      <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
      <button onClick={() => dispatch(buyHotdog(num))}>Buy Hotdog</button>
    </div>
  )
}
