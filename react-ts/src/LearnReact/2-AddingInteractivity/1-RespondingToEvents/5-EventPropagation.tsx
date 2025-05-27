export default function EventPropagation() {
  return (
    <div className="5-event-propagation">
      <h4>Event Propagation</h4>
      <Toolbar />
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

const Toolbar = () => {
  return (
    <div
      style={{
        border: "1px solid gray",
        borderRadius: "0.25em",
        padding: "10px",
        cursor: "pointer",
      }}
      onClick={() => alert("You're clicking Toolbar")}>
      <MyButton onSmash={() => alert("Playing")}>Play Movie</MyButton>
      <MyButton onSmash={() => alert("Uploading")}>Upload Image</MyButton>
    </div>
  )
}
