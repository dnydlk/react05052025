import ListExercise from "./ListExercise"
import User from "./Users"

export default function Lists() {
  const users = [
    { id: 1, name: "Tom", age: 28 },
    { id: 2, name: "Jerry", age: 27 },
    { id: 3, name: "John", age: 26 },
  ]
  return (
    <div className="lists">
      <h3>Lists</h3>
      {users.map((user) => {
        return <User key={user.id} {...user} />
      })}
      <ListExercise />
    </div>
  )
}
