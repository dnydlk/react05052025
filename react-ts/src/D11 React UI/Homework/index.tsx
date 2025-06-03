import ShowHideParagraph from "./ShowHideParagraph/ShowHideParagraph"
import UnclickableButton from "./UnclickableButton/UnclickableButton"

export default function Homework() {
  return (
    <div className="homework">
      <h2>Day 11 Homework</h2>

      <h3>From Google Doc</h3>

      <div className="myBorder">
        <UnclickableButton />
        <hr className="hr2" />
        <ShowHideParagraph />
      </div>
    </div>
  )
}
