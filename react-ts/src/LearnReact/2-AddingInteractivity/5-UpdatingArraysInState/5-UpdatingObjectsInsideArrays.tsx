import { useState } from "react"

export default function UpdatingObjectsInsideArrays() {
  return (
    <div className="5--updating-objects-inside-arrays">
      <h4>Updating objects inside arrays</h4>
      <BucketList />
    </div>
  )
}

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: false },
]

function BucketList() {
  const [myList, setMyList] = useState(initialList)
  const [yourList, setYourList] = useState(initialList)

  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen }
        } else {
          // No changes
          return artwork
        }
      })
    )
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          // Create a *new* object with changes
          return { ...artwork, seen: nextSeen }
        } else {
          // No changes
          return artwork
        }
      })
    )
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  )
}

interface Artwork {
  id: number
  title: string
  seen: boolean
}

interface ItemListProps {
  artworks: Artwork[]
  onToggle: (artworkId: number, nextSeen: boolean) => void
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked)
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  )
}
