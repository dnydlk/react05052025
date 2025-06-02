import useLocalStorage from "./useLocalStorage"
import useUpdateLogger from "./useUpdateLogger"

// custom hook name start with use

export default function App() {
  const [name, setName] = useLocalStorage("name", "")
  useUpdateLogger(name)
  return <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
}
