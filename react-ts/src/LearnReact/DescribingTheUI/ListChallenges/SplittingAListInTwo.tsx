import { people } from "../data"

export default function SplittingAListInTwo() {
  let chemists: any = []
  let everyoneElse: any = []
  people.forEach((person) => {
    if (person.profession === "chemist") {
      chemists.push(person)
    } else {
      everyoneElse.push(person)
    }
  })

  return (
    <div className="splitting-a-list-in-two">
      <h3>Splitting a list in two</h3>
      <article>
        <h1>Scientists</h1>
        <ListSection title="Chemists" people={chemists} />
        <ListSection title="Everyone Else" people={everyoneElse} />
      </article>
    </div>
  )
}

function ListSection({ title, people }: { title: string; people: any }) {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {people.map((person: any) => (
          <li key={person.id}>
            <img src={getImageUrl(person)} alt={person.name} />
            <p>
              <b>{person.name}:</b>
              {" " + person.profession + " "}
              known for {person.accomplishment}
            </p>
          </li>
        ))}
      </ul>
    </>
  )
}

function getImageUrl(person: any) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg"
}
