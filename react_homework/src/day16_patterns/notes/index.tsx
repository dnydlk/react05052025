import { useState } from "react"

const useDisclosure = () => {
  const [isOpen, setOpen] = useState(false)

  const open = () => {
    setOpen(true)
  }
  const close = () => {
    setOpen(false)
  }

  const toggle = () => {
    setOpen((prev) => !prev)
  }

  const handlers = {
    open,
    close,
    toggle,
  }

  return [isOpen, handlers] as [
    boolean,
    { open: () => void; close: () => void; toggle: () => void }
  ]
}

export default function Day16Notes() {
  const [isDisable, handlers] = useDisclosure()

  return (
    <div id="d16-notes">
      <h2>Day 16 Notes</h2>
      <button
        onClick={() => {
          handlers.toggle()
        }}>
        {isDisable ? "Hide" : "Show"} Paragraph
      </button>
      {isDisable && (
        <p>
          {" "}
          Laboris laborum cupidatat nostrud elit magna magna adipisicing labore. Pariatur
          sunt incididunt minim id et proident proident minim. Duis ipsum excepteur
          eiusmod est enim aute nostrud deserunt non nulla ipsum tempor in. Veniam qui
          eiusmod ea aliqua. Velit eiusmod ullamco aute labore pariatur quis. Aliquip
          veniam pariatur pariatur consequat ea et aute deserunt. Officia anim labore
          excepteur labore dolor commodo consequat consectetur nostrud labore dolore duis
          do culpa.
        </p>
      )}
    </div>
  )
}
