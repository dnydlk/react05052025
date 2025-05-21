import { useState } from "react"
import "../index.css"

export default function ShowHideParagraph() {
  const [isVisible, setIsVisible] = useState(false)
  const toggleParagraph = () => {
    setIsVisible(!isVisible)
  }
  return (
    <>
      <h4>Show/Hide Paragraph</h4>
      <p>
        Create a component with a button and a paragraph of text. Clicking the button
        should toggle the visibility of the paragraph.
      </p>
      <button onClick={toggleParagraph}>{isVisible ? "Hide" : "Show"} Paragraph</button>
      {/* <p style={{ display: isVisible ? "block" : "none" }}> */}
      <p style={{ display: isVisible ? "block" : "none" }}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim necessitatibus
        maiores, voluptates vero ipsum numquam praesentium animi similique obcaecati
        sapiente doloremque consequatur earum doloribus sed quam illo dolor magnam
        corporis.
      </p>
    </>
  )
}
