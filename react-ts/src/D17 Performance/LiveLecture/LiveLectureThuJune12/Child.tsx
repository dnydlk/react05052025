import React, { useEffect } from "react"

function Child(props: any) {
  // manages side-effects
  useEffect(() => {
    // useEffect will trigger after the comp finish rendering
    console.log("Child rendered with useEffect")
  })
  return (
    <div className="live-lecture-Thu-June-12-child">
      <h5>Child Comp</h5>
      <code>{JSON.stringify(props)}</code>
    </div>
  )
}

export default React.memo(Child)
