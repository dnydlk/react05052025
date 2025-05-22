import { getImageUrl } from "./utils"

interface Person {
  name: string
  imageId: string
}

interface AvatarProps {
  person: Person
  size?: number
  // ! size: number | undefine
  // ! but passing null or 0, the default value will NOT be used
}

const ratio = window.devicePixelRatio

export default function Avatar({ person, size = 100 }: AvatarProps) {
  // * or do Avatar(props)
  // export default function Avatar(props: AvatarProps) {
  // * const { person, size } = props
  return (
    <img
      className="avatar"
      src={getImageUrl(person, size * ratio > 90 ? "b" : "s")}
      alt={person.name}
      width={size}
      height={size}
    />
  )
}
