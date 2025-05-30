import LifeCycleMethod from "./1-Life-cycle-Method"
import ComponentDidMount from "./2-ComponentDidMount"
import ComponentWillUnmount from "./3-ComponentWillUnmount"
import ComponentDidUpdate from "./4-ComponentDidUpdate"

export default function LifecycleMethods() {
  return (
    <div className="lifecycle-methods">
      <h3>Lifecycle Methods</h3>
      {/* <LifeCycleMethod /> */}
      {/* <ComponentDidMount /> */}
      {/* <ComponentWillUnmount /> */}
      <ComponentDidUpdate />
    </div>
  )
}
