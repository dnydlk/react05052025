import { useEffect, useMemo, useState } from "react"

export default function App() {
  const [number, setNumber] = useState(0)
  const [dark, setDark] = useState(false)
  // slowFunction won't be called as long as number doesn't change
  const doubleNumber = useMemo(() => slowFunction(number), [number])
  const themeStyles = useMemo(
    () => {
      return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "dark",
      }
    },
    [dark] // dark is the only variable that the obj is depends on
  )
  //*[note] themeStyles will have the exact same reference between renders,
  // as long as the content of it doesn't change

  useEffect(() => {
    console.log("Theme Changed")
  }, [themeStyles])
  //*[note] dependency array uses Referencial Equality
  // which means every time comp re-renders, there's a new themeStyles object,
  // and old obj and new obj have different reference,
  // so useEffect will be triggerd every time the comp re-renders.
  // Solution: useMemo() on themStyles:
  //    themStyles object will only be re-createed when the content changes (line 8)

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Change Theme</button>
      <div style={themeStyles}>{doubleNumber}</div>
    </div>
  )
}

function slowFunction(num: number) {
  console.log("Calling Slow Function")
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2
}
