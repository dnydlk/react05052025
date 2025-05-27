export default function PreventingDefaultBehavior() {
  return (
    <div className="7-preventing-default-behavior">
      <h4>Preventing Default Behavior</h4>
      <Signup />
    </div>
  )
}

const Signup = () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        alert("Submitting!")
      }}>
      <input />
      <button>Send</button>
    </form>
  )
}
