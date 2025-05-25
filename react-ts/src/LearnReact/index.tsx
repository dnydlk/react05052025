import DescribingTheUI from "./1-DescribingTheUI"
import QuickStart from "./0-QuickStart"
import AddingInteractivity from "./2-AddingInteractivity"

export default function LearnReact() {
  return (
    <div className="learn-react">
      <QuickStart />
      <hr className="hr2" />
      <DescribingTheUI />
      <hr className="hr2" />
      <AddingInteractivity />
    </div>
  )
}
