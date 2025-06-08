import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "../redux/actions"

export default function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Hooks: Num of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}
