export default function ReadingPropsInEventHandlers() {
  return (
    <div className="reading-props-in-event-handlers">
      <h4>Reading Props In Event Handlers</h4>
      <Toolbar />
    </div>
  )
}

interface AlertButtonProps {
  message: string
  children: React.ReactNode
}

const AlertButton = ({ message, children }: AlertButtonProps) => {
  return <button onClick={() => alert(message)}>{children}</button>
}

const Toolbar = () => {
  return (
    <>
      <AlertButton message="Playing">Play Movie</AlertButton>
      <AlertButton message="Uploading">Upload Image</AlertButton>
    </>
  )
}
