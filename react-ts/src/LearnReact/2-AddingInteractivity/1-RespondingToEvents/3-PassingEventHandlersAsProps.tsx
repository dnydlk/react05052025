export default function PassingEventHandlersAsProps() {
  return (
    <div className="3-passing-event-handlers-as-props">
      <h4>Passing Event Handlers As Props</h4>
      <PlayButton movieName="Harry Potter" />
      <UploadButton />
    </div>
  )
}

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

function MyButton({ onClick, children }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}

const PlayButton = ({ movieName }: { movieName: string }) => {
  return (
    <MyButton onClick={() => alert(`Playing ${movieName}`)}>Play "{movieName}"</MyButton>
  )
}

const UploadButton = () => {
  return <MyButton onClick={() => alert(`Uploading!`)}>Upload Image</MyButton>
}
