import { memo } from "react"
//*[note] memo() will skip the rendering the component and re-use the previous render result
// if the props of child don't changed between renders

const ChildTwo = memo(function ChildTwo({ name }: { name: string }) {
  console.log("Child Two Render")
  return (
    <div>
      <p>ChildTwo</p>
      <p>{name}</p>
    </div>
  )
})

export default ChildTwo