import { useCallback, useEffect, useState } from "react"

export default function App() {
  const [number, setNumber] = useState(1)
  const [dark, setDark] = useState(false)

  const getItems = useCallback(
    (incrementor: number) => [
      number + incrementor,
      number + 1 + incrementor,
      number + 2 + incrementor,
    ],
    [number]
  )

  const theme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "dark",
  }

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Toggle Theme</button>
      <List getItems={getItems} />
    </div>
  )
}

const List = ({ getItems }) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(getItems(1))
    console.log("Updating Items")
  }, [getItems])

  return items.map((item) => {
    return <div key={item}>{item}</div>
  })
}
