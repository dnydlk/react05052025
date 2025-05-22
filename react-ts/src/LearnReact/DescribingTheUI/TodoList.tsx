const today = new Date()

const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-us", { weekday: "long" }).format(date)
}

export default function TodoList() {
  return (
    <>
      <h1>To Do List for {formatDate(today)}</h1>
      <ul
        style={{
          backgroundColor: "black",
          color: "pink",
        }}>
        <li>Imporove the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </>
  )
}
