import { useState } from "react"
import ChildTwo from "./ChildTwo"

export default function ParentTwo() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Vishwas")
  console.log("Parent two Render")
  return (
    <div>
      <p>ParentTwo</p>{" "}
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Codevolution")}>Change name</button>
      <ChildTwo name={name} />
      {/* [note] ChildTwo will re-render regardless of the props changes(setName) */}
      {/* [note] As long as ParentTwo re-renders, all children of ParentTwo will be re-rendered */}
      {/* [note] So, even if we call setCount, which isn't the props of ChildTwo, Childtwo WILL get re-rendered */}
      {/* [todo] we should let React know it should re-render the child comp only if their props changes*/}
      {/* [Solution]: use React.memo */}
    </div>
  )
}
