export default function ListExercise() {
  const planets = [
    { id: 1, name: "Mars", isGasPlanet: false },
    { id: 2, name: "Earth", isGasPlanet: false },
    { id: 3, name: "Jupiter", isGasPlanet: true },
    { id: 4, name: "Venus", isGasPlanet: false },
    { id: 5, name: "Neptune", isGasPlanet: true },
    { id: 6, name: "Uranus", isGasPlanet: true },
  ]

  return (
    <div className="list-exercise">
      {planets.map((p) => {
        const { id, name } = p
        return p.isGasPlanet && <p key={id}>{name}</p>
      })}
    </div>
  )
}
