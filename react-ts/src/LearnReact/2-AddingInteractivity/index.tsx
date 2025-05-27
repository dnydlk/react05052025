import RespondingToEvents from "./1-RespondingToEvents"
import StateAComponentsMemory from "./2-StateAComponentsMemory"
import QueueingASeriesOfStateUpdates from "./3-QueueingASeriesOfStateUpdates"

export default function AddingInteractivity() {
  return (
    <div className="adding-interactivity">
      <h2>Adding Interactivity</h2>
      <RespondingToEvents />
      <StateAComponentsMemory />
      <QueueingASeriesOfStateUpdates />
    </div>
  )
}
