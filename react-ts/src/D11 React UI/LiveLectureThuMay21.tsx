import { usersJson } from "./data"

export default function LiveLectureThuMay21() {
  const userUnder30 = usersJson.users.filter((u) => u.age <= 30)

  return (
    <div className="in-class-thu-may-22">
      <h2>Live Lecture Thu May 21</h2>
      <h3>People under 30</h3>
      {/* {under30.map(({ id, firstName, lastName, age, gender, hair: { color } }) => { */}
      {userUnder30.map((user) => {
        return (
          <User
            key={user.id}
            // firstName={firstName}
            // lastName={lastName}
            // age={age}
            // gender={gender}
            // hairColor={color}
            {...user}
          />
        )
      })}
    </div>
  )
}

interface UserProps {
  firstName: string
  lastName: string
  age: number
  gender: string
  hair: { color: string }
}

// function User({ firstName, lastName, age, gender, hairColor }: UserProps) {
function User(user: UserProps) {
  return (
    <div>
      <span className="myBold">Name: </span>
      {user.firstName} {user.lastName}
      <br />
      <span className="myBold">Age: </span>
      {user.gender === "male" ? user.age : "One should never ask a lady's age"}
      <br />
      <span className="myBold">Gender: </span>
      <span
        style={{
          color: user.gender === "female" ? "pink" : "blue",
        }}>
        {user.gender[0].toUpperCase() + user.gender.slice(1)}{" "}
      </span>
      <br />
      <span className="myBold">Hair Color: </span>
      <span
        style={{
          color: user.hair.color === "White" ? "Black" : user.hair.color,
        }}>
        {user.hair.color}
      </span>
      <br />
      <br />
    </div>
  )
}

// * How to destruct nested properties from an object
//  const {
//    property1,
//-   property2: { nestedProperty1, nestedProperty2 },
//  } = object

// * Implicit return () => one line of code
// * Explicit return () => {return one or more line of code}
// ! ALWASY USE EXPLICIT reutrn for Array.prototype.map()
// * arr.map((m) => {return})
