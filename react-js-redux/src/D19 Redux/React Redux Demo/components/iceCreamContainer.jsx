import { useDispatch, useSelector } from "react-redux"
import { buyIceCream } from "../redux/actions"

function IceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Hooks: Num of IceCreams - {numOfIceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  )
}

export default IceCreamContainer
