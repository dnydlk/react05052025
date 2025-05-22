import ListChallenges from "./ListChallenges"

const people = [
  {
    id: 0,
    name: "Creola Katherine Johnson",
    profession: "mathematician",
    accomplishment: "spaceflight calculations",
    imageId: "MK3eW3A",
  },
  {
    id: 1,
    name: "Mario José Molina-Pasquel Henríquez",
    profession: "chemist",
    accomplishment: "discovery of Arctic ozone hole",
    imageId: "mynHUSa",
  },
  {
    id: 2,
    name: "Mohammad Abdus Salam",
    profession: "physicist",
    accomplishment: "electromagnetism theory",
    imageId: "bE7W1ji",
  },
  {
    id: 3,
    name: "Percy Lavon Julian",
    profession: "chemist",
    accomplishment: "pioneering cortisone drugs, steroids and birth control pills",
    imageId: "IOjWm71",
  },
  {
    id: 4,
    name: "Subrahmanyan Chandrasekhar",
    profession: "astrophysicist",
    accomplishment: "white dwarf star mass calculations",
    imageId: "lrWQx8l",
  },
]

export default function RenderingList() {
  const chemists = people.filter((p) => p.profession === "chemist")
  const listItems = chemists.map(({ id, name, profession, accomplishment, imageId }) => (
    <li key={id}>
      <img src={getImageUrl(imageId)} alt={name} />
      <p>
        <b>{name}</b>
      </p>
      {" " + profession + " "}known for {accomplishment}
    </li>
  ))
  return (
    <div className="rendering-list">
      <ul>{listItems}</ul>
      <br />
      <ListChallenges />
    </div>
  )
}

function getImageUrl(imageId: any) {
  return "https://i.imgur.com/" + imageId + "s.jpg"
}
