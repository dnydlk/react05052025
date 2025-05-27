import React, { useState } from "react"
import { useImmer } from "use-immer"

export default function UpdatingANestedObject() {
  return (
    <div className="2-updating-a-nested-object">
      <h4>Updating a nested object</h4>
      <Form />
    </div>
  )
}

function Form() {
  // const [person, setPerson] = useState({
  //   name: "Niki de Saint Phalle",
  //   artwork: {
  //     title: "Blue Nana",
  //     city: "Hamburg",
  //     image: "https://i.imgur.com/Sd1AgUOm.jpg",
  //   },
  // })
  const [person, updatePerson] = useImmer({
    name: "Niki de Saint Phalle",
    artwork: {
      title: "Blue Nana",
      city: "Hamburg",
      image: "https://i.imgur.com/Sd1AgUOm.jpg",
    },
  })

  // * React useState
  // function handleUpdate({
  //   target: { name, value },
  // }: React.ChangeEvent<HTMLInputElement>) {
  //   if (name === "name") setPerson({ ...person, name: value })
  //   else setPerson({ ...person, artwork: { ...person.artwork, [name]: value } })
  // }

  // * immer
  function handleUpdate({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) {
    if (name === "name")
      updatePerson((draft) => {
        draft.name = value
      })
    else
      updatePerson((draft) => {
        // The keyof typeof draft.artwork tells TypeScript that name should be treated as one of the valid keys of the artwork object.
        draft.artwork[name as keyof typeof draft.artwork] = value
      })
  }

  return (
    <>
      <label style={{ display: "block" }}>
        Name: <input name="name" value={person.name} onChange={handleUpdate} />
      </label>
      <label style={{ display: "block" }}>
        Title: <input name="title" value={person.artwork.title} onChange={handleUpdate} />
      </label>
      <label style={{ display: "block" }}>
        City: <input name="city" value={person.artwork.city} onChange={handleUpdate} />
      </label>
      <label style={{ display: "block" }}>
        Image: <input name="image" value={person.artwork.image} onChange={handleUpdate} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {" by "}
        {person.name}
        <br />
        (located in {person.artwork.city})
      </p>
      <img src={person.artwork.image} alt={person.artwork.title} />
    </>
  )
}
