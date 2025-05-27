import RespondingToEvents from "./1-RespondingToEvents"
import StateAComponentsMemory from "./2-StateAComponentsMemory"
import QueueingASeriesOfStateUpdates from "./3-QueueingASeriesOfStateUpdates"
import UpdateingObjectsInState from "./4-UpdatingObjectsInState"
import UpdatingArraysInState from "./5-UpdatingArraysInState"

export default function AddingInteractivity() {
  return (
    <div className="adding-interactivity">
      <h2>Adding Interactivity</h2>
      <RespondingToEvents />
      <StateAComponentsMemory />
      <QueueingASeriesOfStateUpdates />
      <UpdateingObjectsInState />
      <UpdatingArraysInState />
    </div>
  )
}
