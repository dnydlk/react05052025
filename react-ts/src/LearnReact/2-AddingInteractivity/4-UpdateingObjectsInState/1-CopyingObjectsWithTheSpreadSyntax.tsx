import { useState } from "react"

export default function CopyingObjectsWithTheSpreadSyntax() {
  return (
    <div className="1-copying-objects-with-the-spread-syntax">
      <h4>Copying objects with the spread syntax</h4>
      <Form />
    </div>
  )
}

function Form() {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "bhepworth@sculpture.com",
    gender: "",
  })

  function handleChange({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) {
    setPerson((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <>
      <label style={{ display: "block" }}>
        First name:{" "}
        <input
          name="firstName"
          value={person.firstName}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </label>
      <label style={{ display: "block" }}>
        Last name:{" "}
        <input
          name="lastName"
          value={person.lastName}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </label>
      <label style={{ display: "block" }}>
        Email:{" "}
        <input
          style={{ width: "250px" }}
          name="email"
          value={person.email}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </label>
      <label style={{ display: "block" }}>
        Gender:{" "}
        <input
          name="gender"
          value={person.gender}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </label>
      <p>
        {person.firstName}
        <br /> {person.lastName}
        <br /> {person.email}
        <br /> {person.gender}
      </p>
    </>
  )
}
