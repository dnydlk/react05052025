import { useState } from "react"
import { sculptureList } from "../../data"

export default function AddingAStateVariable() {
  return (
    <div className="1-adding-a-state-variable">
      <Gallery />
    </div>
  )
}

const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [isDescOn, setIsDescOn] = useState(false)

  const navigateSculptureIndex = (direction: number) =>
    setIndex((prevIndex) =>
      direction === 0
        ? 0
        : (prevIndex + direction + sculptureList.length) % sculptureList.length
    )

  let sculpture = sculptureList[index]

  return (
    <>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>

      <div className="myFlexBox">
        <button onClick={() => navigateSculptureIndex(-1)}>Prev</button>
        <button onClick={() => navigateSculptureIndex(0)}>Reset</button>
        <button onClick={() => navigateSculptureIndex(1)}>Next</button>
        <h3>
          ({index + 1} of {sculptureList.length})
        </h3>
      </div>

      <img src={sculpture.url} alt={sculpture.alt} />

      <button
        style={{ display: "block" }}
        className="fixed-width-button"
        onClick={() => setIsDescOn(!isDescOn)}>
        <span>{isDescOn ? "Hide" : "Show More"}</span>
        <span className="ghost">Show More</span>
      </button>

      {isDescOn && <p>{sculpture.description}</p>}
    </>
  )
}
