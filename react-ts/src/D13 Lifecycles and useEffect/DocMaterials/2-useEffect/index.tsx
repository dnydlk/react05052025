import { useState, useEffect } from "react"

export default function UseEffect() {
  return (
    <div className="useEffect">
      <h2>useEffect</h2>
      <a href="https://youtu.be/f55qeKGgB_M?si=uWBU5Or7st_kNm8H&t=7808">
        React Course For Beginners - Learn React in 8 Hours by PedroTech
      </a>
      <br />
      <br />
      <App />
    </div>
  )
}

const App = () => {
  const [showText, setShowText] = useState(false)

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>Show Text</button>
      <br />
      <br />
      {showText && <Text />}
    </div>
  )
}

const Text = () => {
  const [text, setText] = useState("")

  useEffect(() => {
    // mounting & updating state
    console.log("<Text /> component rendered")
    // unmounting state
    return () => console.log("<Text /> component unmounted")
    // the [] dependency array means this effect runs only once when the component mounts
  }, [])

  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <h3>{text}</h3>
    </>
  )
}
