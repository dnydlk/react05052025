import { useState } from "react"

export default function TransformingAnArray() {
  return (
    <div className="2-transforming-an-array">
      <h4>Transforming an array</h4>
      <ShapeEditor />
    </div>
  )
}

let initialShapes = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
]

function ShapeEditor() {
  const [shapes, setShapes] = useState(initialShapes)

  function handleClick() {
    const nextShapes = shapes.map((shape) => {
      if (shape.type === "square") {
        // No change
        return shape
      } else {
        // Return a new circle 50px below
        return {
          ...shape,
          y: shape.y + 50,
        }
      }
    })
    // Re-render with the new array
    setShapes(nextShapes)
  }

  return (
    <>
      <button onClick={handleClick}>Move circles down!</button>
      <div style={{ height: "400px", width: "400px", border: "1px solid gray" }}>
        {shapes.map((shape) => (
          <div
            key={shape.id}
            style={{
              background: "purple",
              position: "relative",
              left: shape.x,
              top: shape.y,
              borderRadius: shape.type === "circle" ? "50%" : "",
              width: 20,
              height: 20,
            }}
          />
        ))}
      </div>
    </>
  )
}
