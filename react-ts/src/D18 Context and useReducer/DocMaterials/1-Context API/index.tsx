import { createContext, useContext, useState } from "react"

export default function ContextAPI() {
  return (
    <div className="d18-context-api">
      <h3>Context API</h3>
      <Parent />
    </div>
  )
}

type AppContextType = {
  userName: string
  setUserName: (name: string) => void
}
// const AppContext = createContext({ userName: "", setUserName: () => {} })
const AppContext = createContext<AppContextType | null>(null)

const Parent = () => {
  const [userName, setUserName] = useState("Daniyal")

  // * Create a context provider
  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <div>
        <h3>Parent</h3>
        {userName}
        {/* <Child setUserName={setUserName} /> */}
        {/* <Child /> */}
        <Child1 />
        <Child2 />
      </div>
    </AppContext.Provider>
  )
}

const Child = () => {
  return (
    <>
      <h3>Child</h3>
      <Grandchild />
    </>
  )
}
const Child1 = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw Error("Failed to fetch the AppContext")
  const { userName } = ctx

  return (
    <>
      <h3>Child1</h3>
      <h3>{userName}</h3>
    </>
  )
}
const Child2 = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw Error("Failed to fetch the AppContext")
  const { setUserName } = ctx

  return (
    <>
      <h3>Child2</h3>
      <button onClick={() => setUserName("Daniyal Dolkun")}>Change Name</button>
    </>
  )
}

const Grandchild = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw Error("Failed to fetch the AppContext")
  const { setUserName } = ctx

  return (
    <>
      <h3>Grandchild</h3>
      <button onClick={() => setUserName("Daniyal Dolkun")}>Change Name</button>
    </>
  )
}
