import { useEffect, useState } from "react"
import "./LiveLectureWedMay28.css"

interface GameCardProps {
  game: GameItem
  onEdit: (id: number, updatedGame: Partial<GameItem>) => void
}

type GameItem = {
  id: number
  name: string
  inStock: boolean
}

const sleep = async (milliseconds: number) => {
  await new Promise((resolve) => setTimeout(resolve, milliseconds))
}

const mockFetch = async (): Promise<GameItem[]> => {
  await sleep(1000)
  const initialGames = [
    { id: 1, name: "Mario", inStock: true },
    { id: 2, name: "Crash Bandicoot", inStock: true },
    { id: 3, name: "Mega Man", inStock: false },
    { id: 4, name: "Pokemon", inStock: true },
    { id: 5, name: "Sonic", inStock: false },
    { id: 6, name: "Rayman", inStock: true },
    { id: 7, name: "Donkey Kong", inStock: true },
  ]
  return initialGames
}

export default function LiveLectureWedMay28() {
  const [games, setGames] = useState<GameItem[] | []>([])
  const [loading, setLoading] = useState(true)

  const handleEdit = (gameId: number, updatedGame: Partial<GameItem>) => {
    setGames((prevGames) =>
      prevGames
        ? prevGames.map((game) => {
            if (game.id === gameId) return { ...game, ...updatedGame }
            else return game
          })
        : []
    )
  }

  // [todo]implement delete feature

  // controlled component - haven't talked about
  //    d12's doc

  // tmw: new topic: patterns
  // useRef
  // ! focus on the hoc & custom hooks

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true)
        const data = await mockFetch()
        setGames(data)
      } catch (error) {
        console.error("Failed to fetch games:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchGames()
  }, [])

  if (loading) {
    return <div>Loading games...</div>
  }

  if (!games) {
    return <div>No games available</div>
  }

  return (
    <div className="live-lecture-wed-may-28">
      <h2> Live Lecture Wed May 28</h2>
      <h3>Game Inventory</h3>
      <div className="myFlexBox">
        {games.map((game) => (
          <GameCard key={game.id} game={game} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  )
}

function GameCard({ game, onEdit }: GameCardProps) {
  const [isEditing, setIsEditing] = useState(false)
  const [currentName, setCurrentName] = useState(game.name)
  const [isInStock, setIsInStock] = useState(game.inStock)

  const handleSave = () => {
    onEdit(game.id, { name: currentName, inStock: isInStock })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setCurrentName(game.name)
    setIsInStock(game.inStock)
    setIsEditing(false)
  }

  return (
    <div className="game-card">
      {isEditing ? (
        <>
          <input
            type="text"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
          />
          <br />
          <label>
            <input
              type="checkbox"
              checked={isInStock}
              onChange={(e) => setIsInStock(e.target.checked)}
            />
            In Stock
          </label>

          <div style={{ marginTop: "10px" }}>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <p>
            <b>{game.name}</b> -{" "}
            <span style={{ color: game.inStock ? "green" : "red" }}>
              {game.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  )
}
