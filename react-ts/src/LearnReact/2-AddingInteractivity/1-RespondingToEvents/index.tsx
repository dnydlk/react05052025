import AddingEventHandlers from "./1-AddingEventHandlers"
import ReadingPropsInEventHandlers from "./2-ReadingPropsInEventHandlers"
import PassingEventHandlersAsProps from "./3-PassingEventHandlersAsProps"
import NamingEventHandlersProps from "./4-NamingEventHandlersProps"
import EventPropagation from "./5-EventPropagation"
import StopEventPropagation from "./6-StopEventPropagation"
import PreventingDefaultBehavior from "./7-PreventingDefaultBehavior"
import Challenge1 from "./8-Challenge-1"

export default function RespondingToEvents() {
  return (
    <div className="1-responding-to-events">
      <h3>Responding to Events</h3>
      <AddingEventHandlers />
      <ReadingPropsInEventHandlers />
      <PassingEventHandlersAsProps />
      <NamingEventHandlersProps />

      <EventPropagation />
      <StopEventPropagation />
      <PreventingDefaultBehavior />
      <ul>
        <li>
          <code>
            <b>e.stopPropagation()</b>
          </code>{" "}
          stops the event handlers attached to the tags above from firing.
        </li>
        <li>
          <code>
            <b>e.preventDefault()</b>
          </code>{" "}
          prevents the default browser behavior for the few events that have it.
        </li>
      </ul>
      <Challenge1 />
    </div>
  )
}
