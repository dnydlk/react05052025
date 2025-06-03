import { getDisplayContent } from "../../../utils/utility functions"
import LifeCycleMethod from "./1-Life-cycle-Method"
import ComponentDidMount from "./2-ComponentDidMount"
import ComponentWillUnmount from "./3-ComponentWillUnmount"
import ComponentDidUpdate from "./4-ComponentDidUpdate"

export default function LifecycleMethods() {
  const components = [
    LifeCycleMethod,
    ComponentDidMount,
    ComponentWillUnmount,
    ComponentDidUpdate,
  ]
  const displayContent = getDisplayContent(components, "hr0")
  return (
    <div className="lifecycle-methods">
      <h3>Lifecycle Methods</h3>
      {displayContent}
    </div>
  )
}
