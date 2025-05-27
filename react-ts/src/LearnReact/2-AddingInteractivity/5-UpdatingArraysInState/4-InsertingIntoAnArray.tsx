import { useState } from "react"

export default function InsertingIntoAnArray() {
  return (
    <div className="4--inserting-into-an-array">
      <h4>Inserting into an array</h4>
      <List />
    </div>
  )
}

let nextId = 3
const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
]

function List() {
  const [name, setName] = useState("")
  const [artists, setArtists] = useState(initialArtists)

  function handleClick() {
    const insertAt = 1 // Could be any index
    const nextArtists = [
      // Items before the insertion point:
      ...artists.slice(0, insertAt),
      // New item:
      { id: nextId++, name: name },
      // Items after the insertion point:
      ...artists.slice(insertAt),
    ]
    setArtists(nextArtists)
    setName("")
  }

  function handleReverse() {
    const nextList = [...artists]
    nextList.reverse()
    setArtists(nextList)
  }

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleClick}>Insert</button>
      <button onClick={handleReverse}>Reverse</button>
      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
    </>
  )
}
