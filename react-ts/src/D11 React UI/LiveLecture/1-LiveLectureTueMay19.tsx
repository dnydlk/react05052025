const cars = [
  { id: 1, year: 2025, name: "Honda", model: "model1" },
  { id: 2, year: 2024, name: "Honda", model: "model2" },
  { id: 3, year: 2023, name: "Honda", model: "model3" },
  { id: 4, year: 2023, name: "Honda", model: "model3" },
]

export default function LiveLectureTueMay19() {
  return (
    <div className="live-lecture-tue-may-19">
      <h2>Live Lecture Thu May 19</h2>
      {/* outer {} is for JSX, inner {} is the object  */}
      {cars.map(({ id, name, year, model }) => {
        // ! best practice is to destruct the iterated obeject
        // const { id, name, year, model } = car
        return <Car key={id} name={name} year={year} model={model} />
        // ! passing the object directly to <Car />
        // !  Make sure the Child can receive all
        // return <Car key={id} {...car} />
      })}
    </div>
  )
}

// { name, year, model } destructure an objcet
const Car = ({ name, year, model }: any) => {
  return (
    <div className="car">
      {/* h1 not used in component as often */}
      <div style={{ color: "blue" }}>Name: {name}</div>
      <div>Year: {year}</div>
      <div>Model: {model}</div>
      {/* <div>Owner: {owner.name}</div> */}
      {/* <div>OwnerID: {owner.id}</div> */}
    </div>
  )
}
