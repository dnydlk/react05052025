export default function NamingEventHandlersProps() {
  return (
    <div className="4-naming-event-handlers-props">
      <h4>Naming Event Handlers Props</h4>
      <App />
    </div>
  )
}

interface ButtonProps {
  onSmash: () => void
  children: React.ReactNode
}

function MyButton({ onSmash, children }: ButtonProps) {
  return <button onClick={onSmash}>{children}</button>
}

const App = () => {
  return (
    <>
      <MyButton onSmash={() => alert("Playing")}>Play Movie</MyButton>
      <MyButton onSmash={() => alert("Uploading")}>Upload Image</MyButton>
    </>
  )
}
