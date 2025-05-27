import { useState } from "react"
import { v4 as uuidv4 } from "uuid"

export default function AddingToAnArray() {
  return (
    <div className="1-adding-to-an-array">
      <h4>Adding to an array</h4>
      <List />
    </div>
  )
}

interface Artists {
  id: string
  name: string
}

function List() {
  const [name, setName] = useState("")
  const [artists, setArtists] = useState<Artists[]>([])
  // console.log(artists)

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setArtists([{ id: uuidv4(), name: name }, ...artists])
            setName("")
          }
        }}
      />
      <button
        onClick={() => {
          setArtists([{ id: uuidv4(), name: name }, ...artists])
          setName("")
        }}>
        Add
      </button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}
            <button onClick={() => setArtists(artists.filter((a) => a.id !== artist.id))}>
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
