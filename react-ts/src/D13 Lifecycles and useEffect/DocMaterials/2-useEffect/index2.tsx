import { useState, useEffect } from "react"

export default function UseEffect2() {
  return (
    <div className="useEffect-2">
      <h3>useEffect-2</h3>
      <a href="https://youtu.be/0ZJgIjIuY7U?si=YnfLPrYPaGFAUyKE">
        Learn useEffect In 13 Minutes
      </a>
      <br />
      <br />
      <App />
      {/* <Example /> */}
    </div>
  )
}

interface Item {
  id: number
  userId: number
  title: string
  body: string
}

const App = () => {
  const [resourceType, setResourceType] = useState("posts")
  const [items, setItems] = useState<Item[] | []>([])

  // const onResourceTypeChange = () =>
  //   useEffect(() => {
  //     console.log("resourceType changed")
  //   }, [resourceType])

  // const onMount = () =>
  //   useEffect(() => {
  //     console.log("on mount")
  //   }, [])
  // onResourceTypeChange()
  // onMount()

  const fetchAllDataByResourceType = async (resourceType: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
    const data = await res.json()
    setItems(data)
  }

  useEffect(() => {
    fetchAllDataByResourceType(resourceType)
    // clean up code:
    return () => console.log("return from resource change")
  }, [resourceType])

  return (
    <div>
      <button
        onClick={() =>
          setResourceType((prevResourceType) => (prevResourceType = "posts"))
        }>
        Posts
      </button>
      <button
        onClick={() =>
          setResourceType((prevResourceType) => (prevResourceType = "users"))
        }>
        Users
      </button>
      <button
        onClick={() =>
          setResourceType((prevResourceType) => (prevResourceType = "comments"))
        }>
        Comments
      </button>
      <h3>{resourceType.charAt(0).toUpperCase() + resourceType.slice(1)}</h3>
      {items.map((i) => {
        return (
          <div key={i.id}>
            <pre>{JSON.stringify(i)}</pre>
          </div>
        )
      })}
    </div>
  )
}

const Example = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return <div className="useEffect2-example">{windowWidth}</div>
}
