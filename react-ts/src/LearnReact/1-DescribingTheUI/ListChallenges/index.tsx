import ExtractingAListItemComponent from "./ExtractingAListItemComponent"
import ListWithASeparator from "./ListWithASeparator"
import SplittingAListInTwo from "./SplittingAListInTwo"

export default function ListChallenges() {
  return (
    <div>
      <SplittingAListInTwo />
      <hr className="hr2" />
      <ExtractingAListItemComponent />
      <hr className="hr2" />
      <ListWithASeparator />
    </div>
  )
}
